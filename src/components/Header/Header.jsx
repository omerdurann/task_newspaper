import React from "react";
import "./header.scss";
import { useData } from "../../context/use-data";

function Header() {
  const { setCategory } = useData();
  
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <div className="logo">
            <a>Ömer Duran</a>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      {/* //navbar */}
      <div>
        <ul className="nav justify-content-center nav">
          <li className="nav-item">
            <a
              className="nav-link"
              aria-current="page"
              href="/"
              onClick={() => setCategory("")}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              aria-current="page"
              href="categories"
              onClick={() => setCategory("business")}
            >
              Business
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="categories"
              onClick={() => setCategory("entertainment")}
            >
              Entertainment
            </a>
          </li>
          <li className="nav-item">
            
            <a
              className="nav-link"
              href="categories"
              onClick={() => setCategory("general")}
            >
              General
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="categories"
              onClick={() => setCategory("health")}
            >
              Health
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="categories"
              onClick={() => setCategory("science")}
            >
              Science
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="categories"
              onClick={() => setCategory("sports")}
            >
              Sports
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="categories"
              onClick={() => setCategory("technology")}
            >
              Technology
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about">
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
