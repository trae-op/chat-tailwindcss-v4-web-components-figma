import { TailwindCssConnectionModule } from "../../../Shared/Modules/TailwindCssConnection";
import { html } from "../../../Shared/utils";

export class ButtonComponent extends TailwindCssConnectionModule {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.setRender(
      html`
        <button type="button" id="js-open-sidebar">
          <svg-menu-component></svg-menu-component>
        </button>
        <menu-dropdown-component></menu-dropdown-component>
      `
    );
  }
}
