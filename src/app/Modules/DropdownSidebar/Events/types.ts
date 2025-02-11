export type TElements = {
  button: HTMLElement | null;
  dropdown: HTMLElement | null;
  background: HTMLElement | null;
} | null;

export type TCustomClassesElements = {
  buttonOpenSidebar: "js-button-open-sidebar";
  menuDropdown: "js-menu-dropdown";
  backgroundSidebar: "js-background-sidebar";
  closeDropdownSidebar: "js-close-dropdown-sidebar";
  openDropdownSidebar: "js-open-dropdown-sidebar";
  showBackgroundSidebar: "js-show-background-sidebar";
  hideBackgroundSidebar: "js-hide-background-sidebar";
};
