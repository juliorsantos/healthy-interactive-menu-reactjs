import { Link } from "react-router-dom";

const Header = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid d-flex">
        <div className="navbar-brand">
          <Link to="/" className="nav-link py-0">
            <h5>GoodFood</h5>
          </Link>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Select your location
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Brazil</a></li>
              <li><a className="dropdown-item" href="#">Mexico</a></li>
              <li><a className="dropdown-item" href="#">United State</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )

}

export default Header;