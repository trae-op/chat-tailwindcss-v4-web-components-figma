import "./features/Contacts";
import "./shared/components";

import { html } from "./shared/utils";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = html`
  <div class="w-full h-screen overflow-hidden">
    <contacts-component></contacts-component>
  </div>
`;
