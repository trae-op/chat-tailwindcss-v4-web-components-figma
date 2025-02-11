import { html } from "../../../Shared/utils";
import { StateService as ContactsStateService } from "../../Contacts";
import type { TCustomClassesElements } from "../Events/types";
import { Module as EventsModule } from "../Events";
import { StateService } from "../Services";

export class ContainerComponent extends EventsModule {
  customClassesElements: TCustomClassesElements = {
    closeViewContact: "js-close-view-contact",
    openViewContact: "js-open-view-contact",
    openViewContactMobile: "js-open-view-contact-mobile",
    closeViewContactMobile: "js-close-view-contact-mobile",
    containerViewContact: "js-container-view-contact",
  };

  constructor(
    private stateService: StateService,
    private contactsStateService: ContactsStateService
  ) {
    super();
  }

  connectedCallback() {
    this.render();
    this.stateService.getState().subscribe((state) => {
      if (state.isCloseViewContact) {
        this.closeViewContact();
      }
    });
    this.contactsStateService.getState().subscribe((state) => {
      if (state.userId) {
        this.openViewContact(state.userId);
      }
    });
  }

  private render() {
    this.setRender(
      html`
        <div
          id="js-container-view-contact"
          class="top-0 z-10 absolute flex flex-col bg-white js-close-view-contact-mobile w-full h-screen duration-200 ease-in-out"
        >
          <view-contact-header-component></view-contact-header-component>
          <view-contact-section-component
            class="overflow-hidden"
          ></view-contact-section-component>
          <view-contact-footer-component></view-contact-footer-component>
        </div>
      `
    );
  }
}
