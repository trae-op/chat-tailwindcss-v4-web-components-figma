import type { TAdditionalService, TComponent } from "./types";

export class Module<NC extends string> {
  private components: Map<NC, CustomElementConstructor> = new Map();
  private modules: Module<NC>[] = [];

  additionalServices<NC>(
    defaultComponents: TComponent<NC>[],
    services?: TAdditionalService<NC>[]
  ): TComponent<NC>[] {
    if (services !== undefined) {
      const servicesByComponentName = Object.fromEntries(
        services.map((service) => [service.componentName, service])
      );

      return defaultComponents.map((component: TComponent<NC>) => {
        const { name, services, componentClass } = component;

        if (servicesByComponentName[name] !== undefined) {
          return {
            name,
            componentClass,
            services: [
              ...(services || []),
              ...servicesByComponentName[name].services,
            ],
          };
        }

        return component;
      });
    }

    return defaultComponents;
  }

  registerComponents(components: TComponent<NC>[]): void {
    components.forEach(({ componentClass, name, services = [] }) => {
      if (!this.components.has(name) && !customElements.get(name)) {
        this.components.set(name, componentClass);
        customElements.define(
          name,
          class extends componentClass {
            constructor() {
              super(...services);
            }
          }
        );
      } else {
        console.warn(`Component with name "${name}" is already registered.`);
      }
    });
  }

  importModules(moduleInstances: Module<NC>[]): Module<NC> {
    moduleInstances.forEach((moduleInstance) => {
      if (!this.modules.includes(moduleInstance)) {
        this.modules.push(moduleInstance);
      } else {
        console.warn(`Module is already imported.`);
      }
    });

    return this;
  }

  bootstrap(): void {
    const app = document.getElementById("app");
    if (app) {
      app.innerHTML = "<app-component></app-component>";
    }
  }
}
