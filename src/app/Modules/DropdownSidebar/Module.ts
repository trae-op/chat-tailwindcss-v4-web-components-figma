import { Module as RegisterModule } from "../../Shared/Modules/Register";
import type {
  TAdditionalService,
  TComponent,
} from "../../Shared/Modules/Register/types";
import { ButtonComponent, MenuComponent } from "./components";
import type { TNameComponents } from "./types";

export class Module<NC extends TNameComponents> extends RegisterModule<NC> {
  private defaultComponents: TComponent<NC>[] = [
    {
      name: "button-dropdown-component" as NC,
      componentClass: ButtonComponent,
    },
    {
      name: "menu-dropdown-component" as NC,
      componentClass: MenuComponent,
    },
  ];

  constructor(services?: TAdditionalService<NC>[]) {
    super();

    this.registerComponents(
      this.additionalServices<NC>(this.defaultComponents, services)
    );
  }
}
