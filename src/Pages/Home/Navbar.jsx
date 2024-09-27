import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom"; // Import Link from react-router-dom

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src="./img/logo.png" alt="Logo" />
      </div>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <RouterLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/home"
              className="navbar--content"
            >
              Home
            </RouterLink>
          </li>

          <li>
            <RouterLink
              onClick={closeMenu}
              to="/about" // Link to About Page
              className="navbar--content"
            >
              About Me
            </RouterLink>
          </li>

          <li>
            <RouterLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/skill"
              className="navbar--content"
            >
              My Skills
            </RouterLink>
          </li>

          <li>
            <RouterLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/portfolio"
              className="navbar--content"
            >
              Projects
            </RouterLink>
          </li>
        </ul>
      </div>
      <RouterLink
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="/contact"
        className="btn btn-outline-primary"
      >
        Contact Me
      </RouterLink>
    </nav>
  );
}

export default Navbar;
