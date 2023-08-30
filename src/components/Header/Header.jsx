import "./Header.css";
import Logo from "../../assets/imgs/brasao-india.png";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to='/'><img src={Logo} alt="Logo" /></Link>
        <span className="menu-info">
          <button className="menu">
            <LuMenu color="white" size={40} />
          </button>
        </span>
      </div>
    </header>
  );
}

export default Header;
