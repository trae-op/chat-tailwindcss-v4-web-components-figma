import { Module as TailwindCssConnectionModule } from "../../../Shared/Modules/TailwindCssConnection";
import type { TCustomClassesElements, TElements } from "./types";

export class Module extends TailwindCssConnectionModule {
  customClassesElements: TCustomClassesElements = {
    openViewContactMobile: "js-open-view-contact-mobile",
    closeViewContactMobile: "js-close-view-contact-mobile",
    containerViewContact: "js-container-view-contact",
    closeViewContact: "js-close-view-contact",
  };

  constructor() {
    super();
  }

  getElement(): TElements {
    const shadow = this.shadowRoot;
    const { closeViewContact, containerViewContact } =
      this.customClassesElements;

    if (shadow !== null && closeViewContact && containerViewContact) {
      const button = shadow.getElementById(closeViewContact);
      const viewContact = shadow.getElementById(containerViewContact);

      return {
        button,
        viewContact,
      };
    }

    return null;
  }

  openViewContact(userId: number) {
    const element = this.getElement();
    const { closeViewContactMobile, openViewContactMobile } =
      this.customClassesElements;

    console.log("userId", userId);

    if (
      element &&
      element.viewContact &&
      closeViewContactMobile &&
      openViewContactMobile
    ) {
      element.viewContact.classList.remove(closeViewContactMobile);
      element.viewContact.classList.add(openViewContactMobile);
    }
  }

  closeViewContact() {
    const element = this.getElement();
    const { closeViewContactMobile, openViewContactMobile } =
      this.customClassesElements;

    if (
      element &&
      element.viewContact &&
      closeViewContactMobile &&
      openViewContactMobile
    ) {
      element.viewContact.classList.add(closeViewContactMobile);
      element.viewContact.classList.remove(openViewContactMobile);
    }
  }
}
