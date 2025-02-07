import { TailwindCssConnectionModule } from "../../../Shared/Modules/TailwindCssConnection";
import { html } from "../../../Shared/utils";

export class HeaderComponent extends TailwindCssConnectionModule {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.setRender(
      html`
        <header class="convert-space-y-11 convert-px-21">
          <div class="flex items-center space-x-2">
            <!-- button open sidebar component -->
            <button type="button" id="js-open-sidebar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
            <!-- title component -->
            <h1 class="font-family-sf-ui-bold text-2xl/4 text-black">
              Messages
            </h1>
          </div>
          <!-- search form component -->
          <form action="#">
            <div
              class="flex items-center space-x-3 bg-custom-light-gray px-3 rounded-xl h-9"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8815 10.8817C10.9574 10.8055 11 10.7025 11 10.595C11 10.4875 10.9574 10.3845 10.8815 10.3083L7.96103 7.38889C8.5294 6.69132 8.83911 5.81869 8.83769 4.91889C8.83651 3.8799 8.42325 2.88379 7.68858 2.14912C6.95391 1.41444 5.95782 1.00118 4.91884 1C3.87986 1.00118 2.88377 1.41444 2.1491 2.14912C1.41443 2.88379 1.00118 3.8799 1 4.91889C1.00118 5.95788 1.41443 6.95398 2.1491 7.68866C2.88377 8.42334 3.87986 8.8366 4.91884 8.83778C5.81864 8.8392 6.69125 8.52948 7.38881 7.96111L10.3093 10.8817C10.3851 10.9573 10.4878 10.9999 10.5949 11C10.6481 11.0001 10.7008 10.9897 10.75 10.9694C10.7992 10.9491 10.8439 10.9193 10.8815 10.8817ZM8.02714 4.91889C8.02626 5.74285 7.69855 6.53281 7.11593 7.11544C6.5333 7.69807 5.74335 8.02578 4.9194 8.02667C4.09535 8.02593 3.30525 7.69829 2.72251 7.11564C2.13977 6.53299 1.81198 5.74295 1.8111 4.91889C1.81198 4.09493 2.13969 3.30496 2.72231 2.72233C3.30494 2.1397 4.09489 1.81199 4.91884 1.81111C5.74289 1.81185 6.53299 2.13949 7.11573 2.72214C7.69848 3.30478 8.02626 4.09483 8.02714 4.91889Z"
                  fill="#676767"
                  stroke="#676767"
                  stroke-width="0.5"
                />
              </svg>

              <input
                class="w-full font-family-sf-pro-regular text-black/45 text-sm outline-0"
                type="search"
              />
            </div>
          </form>
          <!-- sort by component -->
          <div class="flex items-center space-x-2">
            <span
              class="font-family-sf-pro-regular text-black/65 text-sm capitalize"
              >sort by</span
            >
            <button type="button" class="flex items-center convert-space-x-7">
              <span
                class="font-family-sf-pro-regular text-base text-custom-blue"
                >Newest</span
              >
              <svg
                width="5"
                height="4"
                viewBox="0 0 5 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.47508 3.64996L0 1.17488L0.825417 0.350042L2.47508 2.00029L4.12475 0.350042L4.95017 1.17488L2.47508 3.64996Z"
                  fill="#2D9CDB"
                />
              </svg>
            </button>
          </div>
        </header>
      `
    );
  }
}
