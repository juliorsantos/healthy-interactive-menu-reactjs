import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/AppContext";
import LANGS from './../assets/languages.json';

const Header = () => {

  const [state, dispatch] = useContext(Context);

  const getAppLang = () => {
    if (!state.app.locale) {
      return 'Select your location';
    }

    const checkLang = LANGS.filter(item => item.sign === state.app.locale.sign);

    if (!checkLang[0]) {
      return 'Select your location';
    }

    return checkLang[0].name;
  }

  const setAppLang = (lang) => {
    dispatch({ type: 'SET_LANGUAGE', payload: lang });
    return;
  }

  const getCartCount = () => {
    if (!state.cart.length) return 0;

    return state.cart.reduce((prev, curr) => prev + curr.qty, 0);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light header">
      <div className="container-fluid d-flex">
        <div className="navbar-brand">
          <Link to="/" className="nav-link py-0">
            <h5>GoodFood</h5>
          </Link>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              🛒 <span className="cart-count">{getCartCount()}</span>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {getAppLang()}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {LANGS.map((item, key) => (
                <li key={key}>
                  <a
                    onClick={() => setAppLang(item)}
                    className="dropdown-item"
                    href="#">{item.name}</a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )

}

export default Header;