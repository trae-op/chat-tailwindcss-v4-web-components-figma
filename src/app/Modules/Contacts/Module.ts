import { Module as RegisterModule } from "../../Shared/Modules/Register";
import type {
  TAdditionalService,
  TComponent,
} from "../../Shared/Modules/Register/types";
import {
  ContainerComponent,
  HeaderComponent,
  SectionComponent,
} from "./components";
import type { TNameComponents } from "./types";
import { StateService } from "./Services";

export class Module<NC extends TNameComponents> extends RegisterModule<NC> {
  private defaultComponents: TComponent<NC>[] = [
    {
      name: "contacts-container-component" as NC,
      componentClass: ContainerComponent,
    },
    {
      name: "contacts-header-component" as NC,
      componentClass: HeaderComponent,
    },
    {
      name: "contacts-section-component" as NC,
      componentClass: SectionComponent,
      services: [new StateService()],
    },
  ];

  constructor(services?: TAdditionalService<NC>[]) {
    super();

    this.registerComponents(
      this.additionalServices<NC>(this.defaultComponents, services)
    );
  }
}
