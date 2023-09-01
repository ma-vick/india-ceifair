import { useState } from "react";
import "./Header.css";
import Logo from "../../assets/imgs/brasao-india.png";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <header className="header">
      {sidebar && <SideBar isVisible={sidebar} />}
      <div className="container">
        <Link to="/">
          <img src={Logo} alt="Logo" className="logo" />
        </Link>
        <span className="menu-info">
          <button className="menu" onClick={showSidebar}>
            {!sidebar ? <LuMenu color="white" /> : <IoMdClose color="white" />}
          </button>
        </span>
      </div>
    </header>
  );
}

export default Header;
