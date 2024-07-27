'use client'
import { useEffect } from "react";

export function Header() {
  useEffect(() => {
    const handleToggle = () => {
      const menuWrapper = document.querySelector(".th-menu-wrapper");
      if (menuWrapper) {
        menuWrapper.classList.toggle("th-body-visible");
      }
    };

    const menuToggleButtons = document.querySelectorAll(".th-menu-toggle");
    menuToggleButtons.forEach((button) => {
      button.addEventListener("click", handleToggle);
    });

    const menuWrapper = document.querySelector(".th-menu-wrapper");
    menuWrapper.addEventListener("click", (event) => {
      event.stopPropagation();
      handleToggle();
    });

    const menuItems = menuWrapper.querySelectorAll("div");
    menuItems.forEach((item) => {
      item.addEventListener("click", (event) => {
        event.stopPropagation();
      });
    });

    return () => {
      menuToggleButtons.forEach((button) => {
        button.removeEventListener("click", handleToggle);
      });
      menuWrapper.removeEventListener("click", handleToggle);
      menuItems.forEach((item) => {
        item.removeEventListener("click", (event) => {
          event.stopPropagation();
        });
      });
    };
  }, []);

  return (
    <>
      <div className="th-menu-wrapper">
        <div className="th-menu-area text-center">
          <button className="th-menu-toggle" >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="mobile-logo">
            <a href="index.html">
              <span
                data-mask-src="logo.svg"
                className="logo-mask"
              ></span>
              <img src="logo.svg" alt="Bame" />
            </a>
          </div>
          <div className="th-mobile-menu">
            <ul>
              <li>
                <a href="index.html">HOME</a>
              </li>
              <li>
                <a href="#">LaunchPad</a>
              </li>
              <li>
                <a href="#">BLOG</a>
              </li>
              <li>
                <a href="contact.html">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <header className="th-header header-layout2">
        <div className="sticky-wrapper">
          <div className="container">
            <div className="row gx-0 justify-content-between">
              <div className="col-auto">
                <div className="header-logo-wrap">
                  <div className="header-logo">
                    <a href="index.html">
                      {/* <span
                        data-mask-src="/logo.svg"
                        className="logo-mask"
                      ></span> */}
                      <img src="/logo.svg" alt="Bame" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <div className="menu-area">
                  <div className="row gx-0 align-items-center justify-content-lg-between justify-content-end">
                    <div className="col-auto">
                      <nav className="main-menu d-none d-lg-inline-block">
                        <ul>
                          <li>
                            <a href="index.html">HOME</a>
                          </li>
                          <li>
                            <a href="about.html">ABOUT US</a>
                          </li>
                          <li>
                            <a href="blog.html">BLOG</a>
                          </li>
                          <li>
                            <a href="contact.html">CONTACT</a>
                          </li>
                        </ul>
                      </nav>
                      <div className="header-button d-flex d-lg-none">
                        <button type="button" className="th-menu-toggle">
                          <span className="btn-border"></span>
                          <i className="fa-solid fa-bars"></i>
                        </button>
                      </div>
                    </div>
                    <div className="col-auto d-none d-xl-block">
                      <div className="header-button">
                        {/* <button
                          type="button"
                          className="simple-icon searchBoxToggler d-none d-xxl-block"
                        >
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </button> */}
                        {/* <button
                          type="button"
                          className="simple-icon sideMenuInfo d-none d-xxl-block"
                        >
                          <i className="fa-solid fa-bars"></i>
                        </button> */}
                        <div className="d-xl-block d-none">
                          <a href="contact.html" className="th-btn">
                            <i className="fa-brands fa-twitch me-1"></i> Live
                            Streaming
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
