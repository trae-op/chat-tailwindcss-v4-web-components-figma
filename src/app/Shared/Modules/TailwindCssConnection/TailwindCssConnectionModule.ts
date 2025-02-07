import { getEnvironment } from "../../utils/environment";
import { html } from "../../utils/template-strings";

export class TailwindCssConnectionModule extends HTMLElement {
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
