import React from "react";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container sidebar">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Filter
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <input
                          className="form-check-input me-1"
                          type="checkbox"
                          value=""
                          aria-label="..."
                        />
                        First checkbox
                      </li>
                      <li className="list-group-item">
                        <input
                          className="form-check-input me-1"
                          type="checkbox"
                          value=""
                          aria-label="..."
                        />
                        Second checkbox
                      </li>
                      <li className="list-group-item">
                        <input
                          className="form-check-input me-1"
                          type="checkbox"
                          value=""
                          aria-label="..."
                        />
                        Third checkbox
                      </li>
                      <li className="list-group-item">
                        <input
                          className="form-check-input me-1"
                          type="checkbox"
                          value=""
                          aria-label="..."
                        />
                        Fourth checkbox
                      </li>
                      <li className="list-group-item">
                        <input
                          className="form-check-input me-1"
                          type="checkbox"
                          value=""
                          aria-label="..."
                        />
                        Fifth checkbox
                      </li>
                    </ul>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <button className="btn btn-outline-success" type="submit">
                  Uygula
                </button>
              </form>
            </div>
          </div>
          <a className="navbar-brand" href="#">
            Filter
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
