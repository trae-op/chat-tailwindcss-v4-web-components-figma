import { ContactsModule } from "./app/Modules/Contacts";
import { DropdownSidebarModule } from "./app/Modules/DropdownSidebar";
import { RegisterModule } from "./app/Shared/Modules/Register";
import { AppModule } from "./app/AppModule";

const registerModules = new RegisterModule();

registerModules
  .importModules([
    new DropdownSidebarModule(),
    new ContactsModule(),
    new AppModule(),
  ])
  .bootstrap();
