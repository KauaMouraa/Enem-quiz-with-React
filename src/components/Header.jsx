import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <header className="bg-green-600 text-white p-2 flex items-center justify-between shadow-md">
            <Link 
                to="/" 
                className="flex items-center gap-4 text-white no-underline hover:opacity-80 transition"
            >
                <img src={logo} alt="Logo ENEM" height="50px"/>
                <h1 className="text-2xl font-bold">Quiz ENEM</h1>
            </Link>
        </header>
    );
}
 
export default Header;