import { Link } from 'react-router-dom';
import './SideBar.css';

export default function SideBar(){
    return (
        <nav className='nav-sidebar'>
            <div className="nav-container">
                <ul className='ul-sidebar'>
                    <li>
                        <Link to="cei-fair">CEI Fair</Link>
                    </li>
                    <li>
                        <Link to="india">India</Link>
                    </li>
                    <li>
                        <Link to="wedding">Indian/Hindu Wedding</Link>
                    </li>
                    <li>
                        <Link to="foods">Typical Foods</Link>
                    </li>
                    <li>
                        <Link to="ai">Ai in India</Link>
                    </li>
                    <li>
                        <Link to="taj-mahal">Taj Mahal</Link>
                    </li>
                </ul>
            </div>
            <div className="credits">
                <p>developed by <a href="https://github.com/ma-vick" target="_blank" rel='noreferrer'>Victória Almeida</a></p>
            </div>
        </nav>
    );
}