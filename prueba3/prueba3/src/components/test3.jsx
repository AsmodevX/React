import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/about">Acerca</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header