import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { NavbarProps, type NavbarItem } from "./types"; // Adjust the path as needed
import { debounce } from "../../helpers/utility";

const GenericNavbar: React.FC<NavbarProps> = ({
  logo,
  logoRedirectionUrl,
  items,
  cornerButton,
}) => {
  const [activeLink, setActiveLink] = useState<string>("");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + 250;

    sections.forEach((section) => {
      if (
        scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetTop + section.offsetHeight
      ) {
        const currentSectionId = section.getAttribute("id") ?? "";
        setActiveLink(currentSectionId);
      }
    });
  };

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 100);
    window.addEventListener("scroll", debouncedHandleScroll);
    debouncedHandleScroll();
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

  const renderNavItem = (item: NavbarItem) => {
    if (item.dropdown) {
      return (
        <li className="nav-item dropdown" key={item.label}>
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {item.label}
          </a>
          <div
            className="dropdown-menu mb-3"
            aria-labelledby="navbarDropdownMenuLink"
          >
            {item.dropdown.map((dropdownItem) => (
              <a
                className="dropdown-item"
                href={dropdownItem.redirectionUrl}
                key={dropdownItem.label}
              >
                {dropdownItem.label}
              </a>
            ))}
          </div>
        </li>
      );
    }

    return (
      <li
        className={`nav-item ${activeLink === item.sectionId ? "active" : ""}`}
        key={item.label}
      >
        <a className="nav-link" href={item.redirectionUrl ?? "#"}>
          {item.label}
        </a>
      </li>
    );
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light px-3 py-1 shadow-sm">
      {logo && (
        <a className="navbar-brand" href={logoRedirectionUrl ?? "#"}>
          <img src={logo} alt="Logo" height="45px" />
        </a>
      )}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="mx-auto">
          <ul className="navbar-nav mr-auto">
            {items.map((item) => renderNavItem(item))}
          </ul>
        </div>
        {cornerButton && (
          <a href={cornerButton.redirectionUrl} className="nav-item">
            <Button variant="primary" className="rounded-0">
              {cornerButton.bsIcon && (
                <i className={`bi ${cornerButton.bsIcon}`} />
              )}
              <span className="ps-2">{cornerButton.label}</span>
            </Button>
          </a>
        )}
      </div>
    </nav>
  );
};

export default GenericNavbar;
