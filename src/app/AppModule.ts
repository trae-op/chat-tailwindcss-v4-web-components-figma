import { Module as RegisterModule } from "./Shared/Modules/Register";
import { AppComponent } from "./AppComponent";

type TNameComponents = "app-component";

export class AppModule<NC extends TNameComponents> extends RegisterModule<NC> {
  constructor() {
    super();

    this.registerComponents([
      {
        name: "app-component" as NC,
        componentClass: AppComponent,
      },
    ]);
  }
}
