import { html, TailwindcssConnection } from "../../../shared/utils";

class Contacts extends TailwindcssConnection {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.setRender(
      html`
        <div class="convert-pt-27 w-full h-screen">
          <contacts-header-component></contacts-header-component>
          <contacts-section-component></contacts-section-component>
        </div>
      `
    );
  }
}

customElements.define("contacts-component", Contacts);
