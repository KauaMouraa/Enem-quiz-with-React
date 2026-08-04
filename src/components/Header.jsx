import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-success shadow-sm anim-fade-in">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2 text-decoration-none">
          <img src={logo} alt="Logo ENEM" height="42" className="rounded-circle bg-white p-1" />
          <span className="fw-bold fs-4 text-white">Quiz ENEM</span>
        </Link>
      </div>
    </nav>
  );
};

export default Header;