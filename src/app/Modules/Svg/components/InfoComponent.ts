import { Module as TailwindCssConnectionModule } from "../../../Shared/Modules/TailwindCssConnection";
import { html } from "../../../Shared/utils";

export class InfoComponent extends TailwindCssConnectionModule {
  static get observedAttributes() {
    return ["class-path", "class-svg"];
  }

  constructor() {
    super();

    this.setRender(
      html`
        <svg
          id="js-svg-info"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="js-path-info"
            d="M9 18C4.0293 18 0 13.9707 0 9C0 4.0293 4.0293 0 9 0C13.9707 0 18 4.0293 18 9C18 13.9707 13.9707 18 9 18ZM9 16.2C10.9096 16.2 12.7409 15.4414 14.0912 14.0912C15.4414 12.7409 16.2 10.9096 16.2 9C16.2 7.09044 15.4414 5.25909 14.0912 3.90883C12.7409 2.55857 10.9096 1.8 9 1.8C7.09044 1.8 5.25909 2.55857 3.90883 3.90883C2.55857 5.25909 1.8 7.09044 1.8 9C1.8 10.9096 2.55857 12.7409 3.90883 14.0912C5.25909 15.4414 7.09044 16.2 9 16.2ZM8.1 4.5H9.9V6.3H8.1V4.5ZM8.1 8.1H9.9V13.5H8.1V8.1Z"
          />
        </svg>
      `
    );
  }

  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null
  ): void {
    if (oldValue === newValue) {
      return;
    }

    const shadow = this.shadowRoot;
    if (shadow !== null && newValue !== null) {
      const pathElement = shadow.getElementById("js-path-info");
      const svgElement = shadow.getElementById("js-svg-info");

      if (svgElement && name === "class-svg") {
        newValue.split(" ").forEach((cls) => {
          svgElement.classList.add(cls);
        });
      }

      if (pathElement && name === "class-path") {
        newValue.split(" ").forEach((cls) => {
          pathElement.classList.add(cls);
        });
      }
    }
  }
}
