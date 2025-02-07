import { RegisterModule } from "../../Shared/Modules/Register";
import type {
  TAdditionalService,
  TComponent,
} from "../../Shared/Modules/Register/types";
import {
  ContactsComponent,
  HeaderComponent,
  SectionComponent,
} from "./components";
import type { TNameComponents } from "./types";

export class ContactsModule<
  NC extends TNameComponents
> extends RegisterModule<NC> {
  private defaultComponents: TComponent<NC>[] = [
    {
      name: "contacts-component" as NC,
      componentClass: ContactsComponent,
    },
    {
      name: "contacts-header-component" as NC,
      componentClass: HeaderComponent,
    },
    {
      name: "contacts-section-component" as NC,
      componentClass: SectionComponent,
    },
  ];

  constructor(services?: TAdditionalService<NC>[]) {
    super();

    this.registerComponents(
      this.additionalServices<NC>(this.defaultComponents, services)
    );
  }
}
