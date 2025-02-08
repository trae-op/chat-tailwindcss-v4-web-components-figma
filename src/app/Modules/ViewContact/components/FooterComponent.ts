import { Module as TailwindCssConnectionModule } from "../../../Shared/Modules/TailwindCssConnection";
import { html } from "../../../Shared/utils";

export class FooterComponent extends TailwindCssConnectionModule {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.setRender(
      html`
        <footer class="convert-p-11 border-t-1 border-black/10">
          <!-- send form component -->
          <form action="#" class="flex items-center convert-space-x-11">
            <div
              class="relative flex justify-center items-center overflow-hidden"
            >
              <input
                type="file"
                class="top-0 left-0 z-1 absolute opacity-0 w-full h-full"
              />
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.903236 7.151C0.778723 7.02648 0.708774 6.85759 0.708774 6.6815C0.708774 6.5054 0.778723 6.33652 0.903236 6.212L5.59724 1.521C6.0265 1.08071 6.53891 0.73003 7.10475 0.489307C7.67059 0.248585 8.2786 0.122609 8.89351 0.118686C9.50841 0.114763 10.118 0.232972 10.6868 0.466456C11.2557 0.69994 11.7726 1.04405 12.2074 1.47883C12.6422 1.91361 12.9864 2.4304 13.22 2.99923C13.4536 3.56806 13.5719 4.17761 13.568 4.79252C13.5642 5.40742 13.4383 6.01545 13.1977 6.58133C12.9571 7.1472 12.6065 7.65967 12.1662 8.089L6.06624 14.189C5.44129 14.7984 4.6014 15.137 3.72855 15.1314C2.85571 15.1258 2.02022 14.7764 1.40314 14.1591C0.786067 13.5418 0.437107 12.7061 0.431883 11.8333C0.426659 10.9604 0.765592 10.1207 1.37524 9.496L6.53624 4.335C6.91117 3.96901 7.41525 3.76557 7.93918 3.76878C8.46312 3.77199 8.96467 3.98159 9.33509 4.35214C9.70551 4.72269 9.91493 5.22432 9.91796 5.74825C9.92098 6.27219 9.71735 6.7762 9.35124 7.151L5.59724 10.904C5.47285 11.0284 5.30414 11.0983 5.12824 11.0983C4.95233 11.0983 4.78362 11.0284 4.65924 10.904C4.53485 10.7796 4.46497 10.6109 4.46497 10.435C4.46497 10.2591 4.53485 10.0904 4.65924 9.966L8.41224 6.212C8.47383 6.15041 8.52268 6.07729 8.55601 5.99682C8.58934 5.91635 8.6065 5.8301 8.6065 5.743C8.6065 5.6559 8.58934 5.56965 8.55601 5.48918C8.52268 5.40871 8.47383 5.33559 8.41224 5.274C8.35065 5.21241 8.27753 5.16355 8.19706 5.13022C8.11659 5.09689 8.03034 5.07973 7.94324 5.07973C7.85613 5.07973 7.76989 5.09689 7.68941 5.13022C7.60894 5.16355 7.53583 5.21241 7.47424 5.274L2.31324 10.435C1.93994 10.8083 1.73023 11.3146 1.73023 11.8425C1.73023 12.1039 1.78172 12.3627 1.88175 12.6042C1.98178 12.8457 2.1284 13.0652 2.31324 13.25C2.49807 13.4348 2.7175 13.5815 2.959 13.6815C3.2005 13.7815 3.45934 13.833 3.72074 13.833C4.24865 13.833 4.75494 13.6233 5.12824 13.25L11.2282 7.15C11.5485 6.8447 11.8044 6.47843 11.981 6.07274C12.1576 5.66706 12.2513 5.23016 12.2565 4.78774C12.2617 4.34532 12.1784 3.90632 12.0115 3.49657C11.8445 3.08683 11.5973 2.71461 11.2844 2.40181C10.9715 2.08902 10.5991 1.84197 10.1893 1.67521C9.77951 1.50844 9.34048 1.42532 8.89806 1.43074C8.45564 1.43616 8.01878 1.53002 7.61317 1.70678C7.20756 1.88354 6.8414 2.13963 6.53624 2.46L1.84424 7.151C1.71975 7.27521 1.55109 7.34496 1.37524 7.34496C1.19939 7.34496 1.03072 7.27521 0.906236 7.151"
                  fill="black"
                  fill-opacity="0.45"
                />
              </svg>
            </div>
            <div
              class="flex items-center bg-custom-light-gray px-3 rounded-xl w-full h-9"
            >
              <input
                class="w-full font-family-sf-pro-regular text-black/45 text-sm outline-0"
                type="search"
                placeholder="Type your message here.."
              />
            </div>
            <button
              type="submit"
              class="font-family-sf-pro-medium text-custom-green text-sm capitalize"
            >
              send
            </button>
          </form>
        </footer>
      `
    );
  }
}
