import { Module as TailwindCssConnectionModule } from "../../../Shared/Modules/TailwindCssConnection";
import { html } from "../../../Shared/utils";

export class ContainerComponent extends TailwindCssConnectionModule {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.setRender(
      html`
        <div
          class="top-0 z-10 absolute flex flex-col bg-white js-close-view-contact-mobile w-full h-screen duration-200 ease-in-out"
        >
          <view-contact-header-component></view-contact-header-component>
          <view-contact-section-component></view-contact-section-component>
          <view-contact-footer-component></view-contact-footer-component>
        </div>
      `
    );
  }
}
