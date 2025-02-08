import { Module as TailwindCssConnectionModule } from "../../../Shared/Modules/TailwindCssConnection";
import { html } from "../../../Shared/utils";

export class ContainerComponent extends TailwindCssConnectionModule {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.setRender(
      html`
        <div class="convert-pt-27 w-full h-screen">
          <contacts-header-component></contacts-header-component>
          <contacts-section-component></contacts-section-component>
        </div>
      `
    );
  }
}
