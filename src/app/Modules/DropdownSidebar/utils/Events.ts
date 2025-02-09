import { Module as TailwindCssConnectionModule } from "../../../Shared/Modules/TailwindCssConnection";
import type { TElements } from "./types";

export class Events extends TailwindCssConnectionModule {
  constructor() {
    super();
  }

  private getElement(): TElements {
    const shadow = this.shadowRoot;

    if (shadow !== null) {
      const button = shadow.getElementById("js-button-open-sidebar");
      const dropdown = shadow.getElementById("js-menu-dropdown");
      const background = shadow.getElementById("js-background-sidebar");

      return {
        button,
        dropdown,
        background,
      };
    }

    return null;
  }

  private handleOpenSidebar() {
    const shadow = this.shadowRoot;

    const dropdown =
      shadow != null ? shadow.getElementById("js-menu-dropdown") : null;
    const background =
      shadow != null ? shadow.getElementById("js-background-sidebar") : null;
    if (dropdown && background) {
      dropdown.classList.remove("js-close-dropdown-sidebar");
      dropdown.classList.add("js-open-dropdown-sidebar");
      background.classList.remove("hidden");
    }
  }

  private handleBackgroundSidebar() {
    const shadow = this.shadowRoot;
    const background =
      shadow != null ? shadow.getElementById("js-background-sidebar") : null;
    if (background) {
      background.classList.remove("js-show-background-sidebar");
      background.classList.add("js-hide-background-sidebar");
    }
  }

  private handleBackgroundTransitionend() {
    const element = this.getElement();
    if (
      element &&
      element.background &&
      element.dropdown &&
      element.background.classList.contains("js-hide-background-sidebar")
    ) {
      element.dropdown.classList.add("js-close-dropdown-sidebar");
      element.dropdown.classList.remove("js-open-dropdown-sidebar");
      element.background.classList.add("hidden");
    }
  }

  private handleDropdownTransitionend() {
    const element = this.getElement();
    if (
      element &&
      element.dropdown &&
      element.background &&
      element.dropdown.classList.contains("js-open-dropdown-sidebar")
    ) {
      element.background.classList.remove("js-hide-background-sidebar");
      element.background.classList.add("js-show-background-sidebar");
    }
  }

  addEventsListener() {
    const element = this.getElement();

    if (element !== null) {
      if (element.button !== null) {
        element.button.addEventListener(
          "click",
          this.handleOpenSidebar.bind(this)
        );
      }

      if (element.dropdown !== null && element.background !== null) {
        element.background.addEventListener(
          "click",
          this.handleBackgroundSidebar.bind(this)
        );

        element.dropdown.addEventListener(
          "transitionend",
          this.handleDropdownTransitionend.bind(this)
        );

        element.background.addEventListener(
          "transitionend",
          this.handleBackgroundTransitionend.bind(this)
        );
      }
    }
  }
}
