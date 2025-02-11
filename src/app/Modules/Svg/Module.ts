import { Module as RegisterModule } from "../../Shared/Modules/Register";
import type {
  TAdditionalService,
  TComponent,
} from "../../Shared/Modules/Register/types";
import {
  MenuComponent,
  PrevArrowComponent,
  VideoConferenceComponent,
  InfoComponent,
} from "./components";
import type { TNameComponents } from "./types";

export class Module<NC extends TNameComponents> extends RegisterModule<NC> {
  private defaultComponents: TComponent<NC>[] = [
    {
      name: "svg-menu-component" as NC,
      componentClass: MenuComponent,
    },
    {
      name: "svg-prev-arrow-component" as NC,
      componentClass: PrevArrowComponent,
    },
    {
      name: "svg-video-conference-component" as NC,
      componentClass: VideoConferenceComponent,
    },
    {
      name: "svg-info-component" as NC,
      componentClass: InfoComponent,
    },
  ];

  constructor(services?: TAdditionalService<NC>[]) {
    super();

    this.registerComponents(
      this.additionalServices<NC>(this.defaultComponents, services)
    );
  }
}
