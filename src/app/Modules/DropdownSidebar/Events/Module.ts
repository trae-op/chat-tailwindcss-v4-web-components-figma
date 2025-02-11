import { Module as TailwindCssConnectionModule } from "../../../Shared/Modules/TailwindCssConnection";
import type { TCustomClassesElements, TElements } from "./types";

export class Module extends TailwindCssConnectionModule {
  customClassesElements: TCustomClassesElements = {
    buttonOpenSidebar: "js-button-open-sidebar",
    menuDropdown: "js-menu-dropdown",
    backgroundSidebar: "js-background-sidebar",
    closeDropdownSidebar: "js-close-dropdown-sidebar",
    openDropdownSidebar: "js-open-dropdown-sidebar",
    showBackgroundSidebar: "js-show-background-sidebar",
    hideBackgroundSidebar: "js-hide-background-sidebar",
  };

  constructor() {
    super();
  }

  private getElement(): TElements {
    const shadow = this.shadowRoot;
    const { buttonOpenSidebar, menuDropdown, backgroundSidebar } =
      this.customClassesElements;

    if (shadow !== null) {
      const button = shadow.getElementById(buttonOpenSidebar);
      const dropdown = shadow.getElementById(menuDropdown);
      const background = shadow.getElementById(backgroundSidebar);

      return {
        button,
        dropdown,
        background,
      };
    }

    return null;
  }

  private handleOpenSidebar() {
    const element = this.getElement();
    const { closeDropdownSidebar, openDropdownSidebar } =
      this.customClassesElements;

    if (element && element.dropdown && element.background) {
      element.dropdown.classList.remove(closeDropdownSidebar);
      element.dropdown.classList.add(openDropdownSidebar);
      element.background.classList.remove("hidden");
    }
  }

  private handleBackgroundSidebar() {
    const element = this.getElement();
    const { showBackgroundSidebar, hideBackgroundSidebar } =
      this.customClassesElements;

    if (element && element.background) {
      element.background.classList.remove(showBackgroundSidebar);
      element.background.classList.add(hideBackgroundSidebar);
    }
  }

  private handleBackgroundTransitionend() {
    const element = this.getElement();
    const { hideBackgroundSidebar, openDropdownSidebar, closeDropdownSidebar } =
      this.customClassesElements;

    if (
      element &&
      element.background &&
      element.dropdown &&
      element.background.classList.contains(hideBackgroundSidebar)
    ) {
      element.dropdown.classList.add(closeDropdownSidebar);
      element.dropdown.classList.remove(openDropdownSidebar);
      element.background.classList.add("hidden");
    }
  }

  private handleDropdownTransitionend() {
    const element = this.getElement();
    const {
      hideBackgroundSidebar,
      openDropdownSidebar,
      showBackgroundSidebar,
    } = this.customClassesElements;

    if (
      element &&
      element.dropdown &&
      element.background &&
      element.dropdown.classList.contains(openDropdownSidebar)
    ) {
      element.background.classList.remove(hideBackgroundSidebar);
      element.background.classList.add(showBackgroundSidebar);
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
