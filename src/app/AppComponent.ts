import { html } from "./Shared/utils";

export class AppComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render(): void {
    if (this.shadowRoot !== null) {
      this.shadowRoot.innerHTML = html`
        <div class="w-full h-screen overflow-hidden">
          <contacts-component></contacts-component>
        </div>
      `;
    }
  }
}
