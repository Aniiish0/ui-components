export interface NavbarProps {
  logo?: string; // url
  logoRedirectionUrl?: string; // url to redirect to when clicked on the logo
  items: NavbarItem[]; // navbar items to display
  cornerButton?: ButtonProps; // button to the right of the navbar
}

export type ButtonProps = {
  label?: string; // Button label
  redirectionUrl?: string; // URL to redirect to when clicked
  bsIcon?: string; // Bootstrap icon representing bootstrap class
};

export type NavbarItem = {
  label: string; // Label to display
  redirectionUrl?: string; // Redirect to this url on click
  sectionId?: string; // Section id represented by the navbar item to be able to highlight on scroll
  dropdown?: NavbarItem[]; // Dropdown menu items
};
