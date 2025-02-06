import { html, TailwindcssConnection } from "../../../shared/utils";

class ContactsSection extends TailwindcssConnection {
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
          class="h-[calc(100vh-138px)] overflow-x-hidden overflow-y-auto scrollbar"
        >
          <!-- contact component -->
          <div
            class="flex hover:bg-custom-light-gray convert-px-21 py-2 js-show-online js-show-pinned cursor-pointer"
          >
            <div class="flex items-center space-x-3">
              <!-- avatar component -->
              <div class="flex js-online">
                <img
                  class="inline-block rounded-full ring-2 ring-white w-9 h-9"
                  src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="flex flex-col">
                <div class="flex items-center space-x-1">
                  <!-- icon pinned component -->
                  <svg
                    class="hidden js-pinned"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.157 5.086L9.44946 5.793L9.09596 5.4395L6.97496 7.5605L6.62146 9.3285L5.91396 10.0355L3.79296 7.914L1.31796 10.389L0.610962 9.682L3.08596 7.207L0.964462 5.086L1.67146 4.3785L3.43996 4.025L5.56096 1.904L5.20746 1.5505L5.91446 0.842999L10.157 5.086Z"
                      fill="black"
                      fill-opacity="0.45"
                    />
                  </svg>

                  <!-- contact name component -->
                  <span class="font-family-sf-pro-medium text-black/85 text-sm"
                    >John Doe</span
                  >
                </div>
                <div
                  class="flex space-x-1 font-family-sf-pro-medium text-black/45 text-sm js-message-unread"
                >
                  <!-- mark you send component -->
                  <span class="hidden js-message-send">you:</span>
                  <!-- message component -->
                  <span>How are you doing?</span>
                </div>
              </div>
            </div>

            <div class="flex flex-col items-end ml-auto py-1">
              <!-- date time component -->
              <time class="font-family-sf-pro-regular text-black/65 text-xs"
                >16:45</time
              >
              <!-- read component -->
              <svg
                class="hidden mt-auto js-read"
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

              <!-- icon you send component -->
              <svg
                class="hidden mt-auto js-send"
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.99999 5.586L8.59599 0.989502L9.30349 1.6965L3.99999 7L0.817993 3.818L1.52499 3.111L3.99999 5.586Z"
                  fill="#27AE60"
                />
              </svg>

              <!-- new messages component -->
              <div
                class="hidden bg-custom-green mt-auto rounded-full convert-wh-14 font-family-sf-pro-medium text-center text-white convert-fs-10 js-unread"
              >
                2
              </div>
            </div>
          </div>

          <!-- contact component -->
          <div
            id="js-contact-2"
            class="flex hover:bg-custom-light-gray convert-px-21 py-2 js-show-pinned js-show-read cursor-pointer"
          >
            <div class="flex items-center space-x-3">
              <div class="flex js-online">
                <img
                  class="inline-block rounded-full ring-2 ring-white w-9 h-9"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="flex flex-col">
                <div class="flex items-center space-x-1">
                  <svg
                    class="hidden js-pinned"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.157 5.086L9.44946 5.793L9.09596 5.4395L6.97496 7.5605L6.62146 9.3285L5.91396 10.0355L3.79296 7.914L1.31796 10.389L0.610962 9.682L3.08596 7.207L0.964462 5.086L1.67146 4.3785L3.43996 4.025L5.56096 1.904L5.20746 1.5505L5.91446 0.842999L10.157 5.086Z"
                      fill="black"
                      fill-opacity="0.45"
                    />
                  </svg>

                  <span class="font-family-sf-pro-medium text-black/85 text-sm"
                    >John Doe</span
                  >
                </div>
                <div
                  class="flex space-x-1 font-family-sf-pro-medium text-black/45 text-sm js-message-unread"
                >
                  <span class="hidden js-message-send">you:</span>
                  <span>How are you doing?</span>
                </div>
              </div>
            </div>

            <div class="flex flex-col items-end ml-auto py-1">
              <time class="font-family-sf-pro-regular text-black/65 text-xs"
                >16:45</time
              >
              <svg
                class="hidden mt-auto js-read"
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

              <svg
                class="hidden mt-auto js-send"
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.99999 5.586L8.59599 0.989502L9.30349 1.6965L3.99999 7L0.817993 3.818L1.52499 3.111L3.99999 5.586Z"
                  fill="#27AE60"
                />
              </svg>

              <div
                class="hidden bg-custom-green mt-auto rounded-full convert-wh-14 font-family-sf-pro-medium text-center text-white convert-fs-10 js-unread"
              >
                2
              </div>
            </div>
          </div>

          <!-- contact component -->
          <div
            class="flex hover:bg-custom-light-gray convert-px-21 py-2 js-show-unread cursor-pointer"
          >
            <div class="flex items-center space-x-3">
              <div class="flex js-online">
                <img
                  class="inline-block rounded-full ring-2 ring-white w-9 h-9"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="flex flex-col">
                <div class="flex items-center space-x-1">
                  <svg
                    class="hidden js-pinned"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.157 5.086L9.44946 5.793L9.09596 5.4395L6.97496 7.5605L6.62146 9.3285L5.91396 10.0355L3.79296 7.914L1.31796 10.389L0.610962 9.682L3.08596 7.207L0.964462 5.086L1.67146 4.3785L3.43996 4.025L5.56096 1.904L5.20746 1.5505L5.91446 0.842999L10.157 5.086Z"
                      fill="black"
                      fill-opacity="0.45"
                    />
                  </svg>

                  <span class="font-family-sf-pro-medium text-black/85 text-sm"
                    >John Doe</span
                  >
                </div>
                <div
                  class="flex space-x-1 font-family-sf-pro-medium text-black/45 text-sm js-message-unread"
                >
                  <span class="hidden js-message-send">you:</span>
                  <span>How are you doing?</span>
                </div>
              </div>
            </div>

            <div class="flex flex-col items-end ml-auto py-1">
              <time class="font-family-sf-pro-regular text-black/65 text-xs"
                >16:45</time
              >
              <svg
                class="hidden mt-auto js-read"
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

              <svg
                class="hidden mt-auto js-send"
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.99999 5.586L8.59599 0.989502L9.30349 1.6965L3.99999 7L0.817993 3.818L1.52499 3.111L3.99999 5.586Z"
                  fill="#27AE60"
                />
              </svg>

              <div
                class="hidden bg-custom-green mt-auto rounded-full convert-wh-14 font-family-sf-pro-medium text-center text-white convert-fs-10 js-unread"
              >
                2
              </div>
            </div>
          </div>

          <!-- contact component -->
          <div
            class="flex hover:bg-custom-light-gray convert-px-21 py-2 js-show-send cursor-pointer"
          >
            <div class="flex items-center space-x-3">
              <div class="flex js-online">
                <img
                  class="inline-block rounded-full ring-2 ring-white w-9 h-9"
                  src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="flex flex-col">
                <div class="flex items-center space-x-1">
                  <svg
                    class="hidden js-pinned"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.157 5.086L9.44946 5.793L9.09596 5.4395L6.97496 7.5605L6.62146 9.3285L5.91396 10.0355L3.79296 7.914L1.31796 10.389L0.610962 9.682L3.08596 7.207L0.964462 5.086L1.67146 4.3785L3.43996 4.025L5.56096 1.904L5.20746 1.5505L5.91446 0.842999L10.157 5.086Z"
                      fill="black"
                      fill-opacity="0.45"
                    />
                  </svg>

                  <span class="font-family-sf-pro-medium text-black/85 text-sm"
                    >John Doe</span
                  >
                </div>
                <div
                  class="flex space-x-1 font-family-sf-pro-medium text-black/45 text-sm js-message-unread"
                >
                  <span class="hidden js-message-send">you:</span>
                  <span>How are you doing?</span>
                </div>
              </div>
            </div>

            <div class="flex flex-col items-end ml-auto py-1">
              <time class="font-family-sf-pro-regular text-black/65 text-xs"
                >16:45</time
              >
              <svg
                class="hidden mt-auto js-read"
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

              <svg
                class="hidden mt-auto js-send"
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.99999 5.586L8.59599 0.989502L9.30349 1.6965L3.99999 7L0.817993 3.818L1.52499 3.111L3.99999 5.586Z"
                  fill="#27AE60"
                />
              </svg>

              <div
                class="hidden bg-custom-green mt-auto rounded-full convert-wh-14 font-family-sf-pro-medium text-center text-white convert-fs-10 js-unread"
              >
                2
              </div>
            </div>
          </div>

          <!-- contact component -->
          <div
            class="flex hover:bg-custom-light-gray convert-px-21 py-2 cursor-pointer"
          >
            <div class="flex items-center space-x-3">
              <div class="flex js-online">
                <img
                  class="inline-block rounded-full ring-2 ring-white w-9 h-9"
                  src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="flex flex-col">
                <div class="flex items-center space-x-1">
                  <svg
                    class="hidden js-pinned"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.157 5.086L9.44946 5.793L9.09596 5.4395L6.97496 7.5605L6.62146 9.3285L5.91396 10.0355L3.79296 7.914L1.31796 10.389L0.610962 9.682L3.08596 7.207L0.964462 5.086L1.67146 4.3785L3.43996 4.025L5.56096 1.904L5.20746 1.5505L5.91446 0.842999L10.157 5.086Z"
                      fill="black"
                      fill-opacity="0.45"
                    />
                  </svg>

                  <span class="font-family-sf-pro-medium text-black/85 text-sm"
                    >John Doe</span
                  >
                </div>
                <div
                  class="flex space-x-1 font-family-sf-pro-medium text-black/45 text-sm js-message-unread"
                >
                  <span class="hidden js-message-send">you:</span>
                  <span>How are you doing?</span>
                </div>
              </div>
            </div>

            <div class="flex flex-col items-end ml-auto py-1">
              <time class="font-family-sf-pro-regular text-black/65 text-xs"
                >16:45</time
              >
              <svg
                class="hidden mt-auto js-read"
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

              <svg
                class="hidden mt-auto js-send"
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.99999 5.586L8.59599 0.989502L9.30349 1.6965L3.99999 7L0.817993 3.818L1.52499 3.111L3.99999 5.586Z"
                  fill="#27AE60"
                />
              </svg>

              <div
                class="hidden bg-custom-green mt-auto rounded-full convert-wh-14 font-family-sf-pro-medium text-center text-white convert-fs-10 js-unread"
              >
                2
              </div>
            </div>
          </div>
        </section>
      `
    );
  }
}

customElements.define("contacts-section-component", ContactsSection);
