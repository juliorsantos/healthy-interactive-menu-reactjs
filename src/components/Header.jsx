import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/AppContext";

const Header = (props) => {

  const [state, dispatch] = useContext(Context);

  const LANGS = [
    {
      "sign": "pt-BR",
      "name": "Brazil",
      "currency": {
        "style": "BRL"
      }
    },
    {
      "sign": "es-MX",
      "name": "México",
      "currency": {
        "style": "MXN"
      }
    },
    {
      "sign": "en-US",
      "name": "United State",
      "currency": {
        "style": "USD"
      }
    },
  ]

  const getAppLang = () => {
    if(!state.app.language) {
      return 'Select your location';
    }

    return LANGS.filter(item => item.sign === state.app.language)[0].name;
  }

  const setAppLang = (lang) => {
    dispatch({ type: 'SET_LANGUAGE', payload: lang });
    return;
  }

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
              { getAppLang() }
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {LANGS.map((item, key) => (
                <li key={key}>
                  <a
                    onClick={() => setAppLang(item.sign)}
                    className="dropdown-item"
                    href="#">{ item.name }</a>
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