// Navbar.js
import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Select from "react-select";

const HorizantalBar = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const $button = buttonRef.current;

    const handleButtonClick = (e) => {
      e.preventDefault();
      document.getElementById("wrapper").classList.toggle("toggled");
    };

    $button.addEventListener("click", handleButtonClick);

    return () => {
      $button.removeEventListener("click", handleButtonClick);
    };
  }, []);

  const location = useLocation();
  const currentPath = location.pathname;

  const tournamentleveloptions = [
    { value: "cricket", label: "Cricket" },
    { value: "football", label: "Football" },
  ];

  return (
    <div id="navbar-wrapper">
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              ref={buttonRef}
              className="navbar-brand mx-4 border-0"
              id="sidebar-toggle"
            >
              <i className="fa fa-bars"></i>
            </button>
          </div>
          <div className="d-flex">
            <div className="py-2">
              <Select
                options={tournamentleveloptions}
                placeholder="Type of the Sport"
                classNamePrefix="sport-type-dropdown"
              />
            </div>
            <div className="py-2">
              <span className="mt-5">
                <button
                  type="button"
                  className="position-relative border border-0 notification me-4"
                >
                  <span className="fs-5 notification-bellicon">
                    <i className="fa-solid fa-bell"></i>
                  </span>
                  <span className="position-absolute Notification-icon top-2 start-95 translate-middle badge rounded-pill bg-danger fs-6 text-center px-1">
                    0<span className="visually-hidden">unread messages</span>
                  </span>
                </button>
                <div className="btn-group ">
                  <button
                    className="header-link me-4 border-0 "
                    id="mainHeaderProfile"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <div className="me-xl-2">
                        <img
                          src={
                            "https://i.pinimg.com/564x/f8/66/8e/f8668e5328cfb4938903406948383cf6.jpg"
                          }
                          className="inquiry-profiles"
                          alt="profileImg"
                        />
                      </div>
                      <div className="d-xl-block d-none lh-1">
                        <span className="fw-medium lh-1 fs-6">Mr. John</span>
                      </div>
                    </div>
                  </button>
                  <ul
                    className="main-header-dropdown dropdown-menu mt-3 overflow-hidden header-profile-dropdown dropdown-menu-end ms-5 p-0"
                    aria-labelledby="mainHeaderProfile"
                  >
                    <li
                      className={
                        currentPath === "/profile"
                          ? "profile-active"
                          : "profile-icon"
                      }
                    >
                      <Link
                        className="profile-icon-link d-flex align-items-center py-3 px-3"
                        to="/profile"
                      >
                        <i className="fa-regular fa-user me-2 fs-6 text-primary"></i>
                        Profile
                      </Link>
                    </li>
                    {/* <li className="profile-icon mt-2 mb-2">
                    <Link className="dropdown-item d-flex align-items-center mb-2" to="/support">
                      <i className="fa-solid fa-headset me-2 fs-6 text-secondary"></i>Support
                    </Link>
                  </li> */}
                    <li className="profile-icon border-0">
                      <Link
                        className="profile-icon-link d-flex align-items-center py-3 px-3"
                        to="/Login"
                      >
                        <i className="fa-solid fa-right-from-bracket me-2 fs-6 text-success"></i>
                        Log Out
                      </Link>
                    </li>
                  </ul>
                </div>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HorizantalBar;
