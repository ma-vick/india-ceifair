import { PropTypes } from 'prop-types';
import { Link } from "react-router-dom";
import "./SideBar.css";
import { useState } from 'react';

export default function SideBar({ isVisible }) {
    const [setIsVisible] = useState(isVisible);

  return (
    <nav className={`nav-sidebar ${isVisible ? "active" : ""}`}>
      <div className="nav-container">
        <ul className="ul-sidebar">
          <li>
            <Link to="cei-fair" onClick={() => isVisible && setIsVisible(false)}>CEI Fair</Link>
          </li>
          <li>
            <Link to="india" onClick={() => isVisible && setIsVisible(false)}>India</Link>
          </li>
          <li>
            <Link to="wedding" onClick={() => isVisible && setIsVisible(false)}>Indian/Hindu Wedding</Link>
          </li>
          <li>
            <Link to="foods" onClick={() => isVisible && setIsVisible(false)}>Typical Foods</Link>
          </li>
          <li>
            <Link to="festivals" onClick={() => isVisible && setIsVisible(false)}>Festivals</Link>
          </li>
          <li>
            <Link to="ai" onClick={() => isVisible && setIsVisible(false)}>Ai in India</Link>
          </li>
          <li>
            <Link to="taj-mahal" onClick={() => isVisible && setIsVisible(false)}>Taj Mahal</Link>
          </li>
        </ul>
      </div>
      <div className="credits">
        <p>
          developed by{" "}
          <a href="https://github.com/ma-vick" target="_blank" rel="noreferrer">
            Victória Almeida
          </a>
        </p>
      </div>
    </nav>
  );
}

SideBar.propTypes = {
    isVisible: PropTypes.bool,
};