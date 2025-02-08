import { Module as RegisterModule } from "../../Shared/Modules/Register";
import type {
  TAdditionalService,
  TComponent,
} from "../../Shared/Modules/Register/types";
import {
  ContainerComponent,
  HeaderComponent,
  SectionComponent,
  FooterComponent,
} from "./components";
import type { TNameComponents } from "./types";

export class Module<NC extends TNameComponents> extends RegisterModule<NC> {
  private defaultComponents: TComponent<NC>[] = [
    {
      name: "view-contact-container-component" as NC,
      componentClass: ContainerComponent,
    },
    {
      name: "view-contact-header-component" as NC,
      componentClass: HeaderComponent,
    },
    {
      name: "view-contact-section-component" as NC,
      componentClass: SectionComponent,
    },
    {
      name: "view-contact-footer-component" as NC,
      componentClass: FooterComponent,
    },
  ];

  constructor(services?: TAdditionalService<NC>[]) {
    super();

    this.registerComponents(
      this.additionalServices<NC>(this.defaultComponents, services)
    );
  }
}
