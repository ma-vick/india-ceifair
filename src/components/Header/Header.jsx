import "./Header.css";
import Logo from "../../assets/imgs/brasao-india.png";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

function Header() {
  return (
    <header className="header">
      <SideBar />
      <div className="container">
        <Link to='/'><img src={Logo} alt="Logo" className="logo" /></Link>
        <span className="menu-info">
          <button className="menu">
            <LuMenu color="white" />
          </button>
        </span>
      </div>
    </header>
  );
}

export default Header;
