import { Link } from 'react-router-dom';

export const Navbar = () => (
  <nav>
    <ul className="navbar">
      <li>
        <Link to="/">
          <h3 className="text-highlight"> Landkit. </h3>
        </Link>
      </li>
      <div>
        <li className="nav-item">
          <Link to="/users" className="nav-link">
            Users
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </div>
      <button type="button" className="btn btn-primary">
        Buy Now
      </button>
    </ul>
  </nav>
);
