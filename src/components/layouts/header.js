import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { changeLang, changeTheme } from "../../actions";
import Cookie from "../../helpers/cookie";

export default function Header() {
  const darkMode = useSelector((state) => state.themeMode),
    lang = useSelector((state) => state.lang),
    dispatch = useDispatch();

  const { t } = useTranslation();

  let setLang = () => {
    lang === "fa" ? dispatch(changeLang("en")) : dispatch(changeLang("fa"));
  };
  // const { currency, setCurrency } = CryptoState();
  let setdarkMode = () => {
    dispatch(changeTheme(!darkMode));
    Cookie.setCookie("darkMode", !darkMode);
  };

  return (
    <>
      <Navbar>
        <Navbar.Brand className="logo__item d-flex align-items-center" href="/">
          <img src="/favicon.ico" alt="" width="25px" height="25px" /> &nbsp;{" "}
          <span>Exchange</span>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav__items">
            <NavLink className="nav-link" exact to="/">
              {t("home")}
            </NavLink>
            <NavLink className="nav-link" to="/trade">
              {t("trade")}
            </NavLink>
            <NavLink className="nav-link" to="/price">
              {t("price")}
            </NavLink>
            <NavLink className="nav-link" to="/faq">
              {t("faq")}
            </NavLink>
            <NavLink className="nav-link" to="/about">
              {t("about")}
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              {t("contact")}
            </NavLink>
          </Nav>
          <Nav className="nav__items-2">
            <NavLink className="nav-link" to="/login">
              {t("login")}
            </NavLink>
            <i className="vertical__line__seperator"></i>
            <NavLink className="nav-link" to="/register">
              {t("register")}
            </NavLink>
            <i className="vertical__line__seperator"></i>
            <Nav.Link className="nav-link lang" onClick={() => setLang()}>
              {lang === "fa" ? "EN" : "FA"}
            </Nav.Link>
            <i className="vertical__line__seperator"></i>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Currency"
              menuVariant="dark"
              value={"USD"}
              onChange={(e) => alert(e.target.value)}
            >
              <NavDropdown.Item>USD</NavDropdown.Item>
              <NavDropdown.Item>INR</NavDropdown.Item>
            </NavDropdown>
            <i className="vertical__line__seperator"></i>
            <Nav.Link
              className="dn__icon"
              onClick={() => setdarkMode(!darkMode)}
            >
              {!darkMode ? (
                <FontAwesomeIcon className="moon" icon="moon" />
              ) : (
                <FontAwesomeIcon className="sun" icon="sun" />
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
