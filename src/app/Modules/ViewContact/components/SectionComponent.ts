import { Module as TailwindCssConnectionModule } from "../../../Shared/Modules/TailwindCssConnection";
import { html } from "../../../Shared/utils";

export class SectionComponent extends TailwindCssConnectionModule {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.setRender(
      html`
        <section
          class="flex flex-col-reverse convert-p-21 w-full h-full overflow-x-hidden overflow-y-auto scrollbar"
        >
          <div class="flex flex-col items-end space-y-1 ml-auto">
            <!-- your image message component -->
            <img
              class="rounded-lg convert-wh-240 object-cover"
              src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90"
              alt=""
            />
            <!-- your link message component -->
            <div
              class="flex flex-col items-end space-y-1 bg-custom-super-light-gray p-3 rounded-2xl"
            >
              <a
                class="font-family-sf-ui-bold-regular text-custom-blue text-sm"
                href="#"
                >https://dribbble.com/shots/17742253-ui-kit-designjam</a
              >
            </div>
            <!-- your text message component -->
            <div
              class="flex flex-col items-end space-y-1 bg-custom-super-light-gray p-3 rounded-2xl"
            >
              <span class="font-family-sf-ui-bold-regular text-black/85 text-sm"
                >Hi, yes, David have found it, ask our concierge 👀
              </span>
              <div class="flex items-center space-x-1">
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.801 4.88L6.507 5.586L10.74 1.353L11.447 2.06L6.507 7L3.325 3.818L4.032 3.111L5.0945 4.1735L5.801 4.8795V4.88ZM5.802 3.466L8.278 0.989502L8.983 1.6945L6.507 4.171L5.802 3.466ZM4.3885 6.2935L3.682 7L0.5 3.818L1.207 3.111L1.9135 3.8175L1.913 3.818L4.3885 6.2935Z"
                    fill="#27AE60"
                  />
                </svg>
                <time class="font-family-sf-pro-regular text-black/65 text-xs"
                  >16:45</time
                >
              </div>
            </div>
          </div>

          <!-- date time line component -->
          <div class="relative flex my-5 w-full convert-h-14">
            <hr class="border-0 bg-custom-light-gray m-auto w-full h-[1px]" />
            <time
              class="absolute inset-1/2 bg-white px-6 min-w-max convert-h-14 font-family-sf-pro-medium text-black/45 text-center text-xs transform -translate-x-1/2 -translate-y-1/2"
              >Today</time
            >
          </div>

          <!-- your sender component -->
          <div class="flex convert-space-x-9">
            <!-- avatar your sender component -->
            <img
              class="inline-block rounded-full ring-2 ring-white w-6 h-6"
              src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div class="flex flex-col items-start space-y-1">
              <!-- image your sender component -->
              <img
                class="rounded-lg convert-wh-240 object-cover"
                src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90"
                alt=""
              />
              <!-- link your sender component -->
              <div
                class="flex flex-col items-end space-y-1 bg-custom-super-light-gray p-3 rounded-2xl"
              >
                <a
                  class="font-family-sf-ui-bold-regular text-custom-blue text-sm"
                  href="#"
                  >https://dribbble.com/shots/17742253-ui-kit-designjam</a
                >
              </div>
              <!-- message your sender component -->
              <div
                class="flex flex-col items-end space-y-1 bg-custom-super-light-gray p-3 rounded-2xl"
              >
                <span
                  class="font-family-sf-ui-bold-regular text-black/85 text-sm"
                  >Hi, yes, David have found it, ask our concierge 👀
                </span>
                <div class="flex items-center space-x-1">
                  <!-- status read component -->
                  <svg
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.801 4.88L6.507 5.586L10.74 1.353L11.447 2.06L6.507 7L3.325 3.818L4.032 3.111L5.0945 4.1735L5.801 4.8795V4.88ZM5.802 3.466L8.278 0.989502L8.983 1.6945L6.507 4.171L5.802 3.466ZM4.3885 6.2935L3.682 7L0.5 3.818L1.207 3.111L1.9135 3.8175L1.913 3.818L4.3885 6.2935Z"
                      fill="#27AE60"
                    />
                  </svg>
                  <!-- date time component -->
                  <time class="font-family-sf-pro-regular text-black/65 text-xs"
                    >16:45</time
                  >
                </div>
              </div>
            </div>
          </div>
        </section>
      `
    );
  }
}
