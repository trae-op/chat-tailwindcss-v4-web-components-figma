import { Module as RegisterModule } from "../../Shared/Modules/Register";
import type {
  TAdditionalService,
  TComponent,
} from "../../Shared/Modules/Register/types";
import { MenuComponent } from "./components";
import type { TNameComponents } from "./types";

export class Module<NC extends TNameComponents> extends RegisterModule<NC> {
  private defaultComponents: TComponent<NC>[] = [
    {
      name: "svg-menu-component" as NC,
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
