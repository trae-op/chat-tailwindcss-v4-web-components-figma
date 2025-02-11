import { Module as EventsModule } from "../Events";
import { html } from "../../../Shared/utils";
import { StateService } from "../Services";

export class HeaderComponent extends EventsModule {
  constructor(private stateService: StateService) {
    super();
  }

  connectedCallback() {
    this.render();

    const element = this.getElement();

    if (element !== null) {
      if (element.button !== null) {
        element.button.addEventListener(
          "click",
          this.handleCloseViewContact.bind(this)
        );
      }
    }
  }

  private handleCloseViewContact() {
    this.stateService.setState({
      isCloseViewContact: true,
    });
  }

  private render() {
    this.setRender(
      html`
        <header
          class="flex items-center convert-p-11 border-b-1 border-black/10"
        >
          <div class="flex items-center space-x-2">
            <!-- button prev arrow component -->
            <button id="js-close-view-contact" type="button" class="text-black">
              <svg-prev-arrow-component></svg-prev-arrow-component>
            </button>
            <!-- avatar component -->
            <div class="flex overflow-hidden">
              <img
                class="inline-block rounded-full ring-2 ring-white convert-wh-42"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div class="flex flex-col">
              <!-- username component -->
              <span class="font-family-sf-pro-medium text-black/85 text-sm"
                >John Doe</span
              >
              <span
                class="font-family-sf-pro-medium text-custom-green text-sm capitalize"
                >online</span
              >
            </div>
          </div>

          <div class="flex items-center ml-auto">
            <!-- video conference component -->

            <button
              type="button"
              class="flex justify-center items-center hover:bg-custom-green rounded-2xl"
            >
              <svg-video-conference-component
                class-svg="group convert-wh-42 p-3"
                class-path="group-hover:fill-white fill-custom-green"
              ></svg-video-conference-component>
            </button>

            <!-- user info component -->
            <button
              type="button"
              class="flex justify-center items-center hover:bg-black/45 rounded-2xl"
            >
              <svg-info-component
                class-svg="group convert-wh-42 p-3"
                class-path="group-hover:fill-white fill-black/45"
              ></svg-info-component>
            </button>
          </div>
        </header>
      `
    );
  }
}
