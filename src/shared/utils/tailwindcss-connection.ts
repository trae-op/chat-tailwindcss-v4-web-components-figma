import { getEnvironment } from "./environment";
import { html } from "./template-strings";

export class TailwindcssConnection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  private getImport() {
    if (getEnvironment("PROD")) {
      return "./assets/output.css";
    }

    return "./dist/assets/output.css";
  }

  setRender(content: string) {
    const shadow: ShadowRoot | null = this.shadowRoot;
    const path = this.getImport();
    if (shadow !== null) {
      shadow.innerHTML = html`
        <style>
          @import "${path}";
        </style>
        ${content}
      `;
    }
  }
}
