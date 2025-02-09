import { Module as ContactsModule } from "./app/Modules/Contacts";
import { Module as ViewContactModule } from "./app/Modules/ViewContact";
import { Module as SvgModule } from "./app/Modules/Svg";
import { Module as DropdownSidebarModule } from "./app/Modules/DropdownSidebar";
import { Module as RegisterModule } from "./app/Shared/Modules/Register";
import { AppModule } from "./app/AppModule";

const registerModules = new RegisterModule();

registerModules
  .importModules([
    new DropdownSidebarModule(),
    new ContactsModule(),
    new ViewContactModule(),
    new SvgModule(),
    new AppModule(),
  ])
  .bootstrap();
