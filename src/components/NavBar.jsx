import React from "react";
import logo from "../image/logo.svg";
import home from "../image/home.svg";
import dollar from "../image/dollar-sign.svg";
import plus from "../image/plus-square.svg";
import activBtn from "../image/3.svg";
import inactivBtn from "../image/0.svg";
import user from "../image/user.svg";
import logout from "../image/log-out.svg";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/crypto-bots");
  };
  return (
    <div className="navbar">
      <div className="navbar__rollup">
        <img src={logo} className="navbar__logo" alt="logo" />
        <button className="navbar__rollup-button"></button>
      </div>

      <div className="navbar__menu">
        {/* переименовать в element-pages */}
        <div className="navbar__menu_pages">
          <nav>
            <div className="element__position">
              <img src={home} alt="home" className="element__img" />
              <h2 className="element__title">Home</h2>
            </div>
            <div className="element__position">
              <img src={dollar} alt="Billing" className="element__img" />
              <h2 className="element__title">Billing</h2>
            </div>
          </nav>
        </div>

        <div className="element-bots">
          <nav>
            <ul className="element-bots__list">
              <li className="element-bots__position">
                <p className="element__title">Your bots</p>
                <img
                  src={plus}
                  alt="plus"
                  className="element-bots__icons"
                ></img>
              </li>
              <li className="element-bots__position">
                <p className="element__title">DCA</p>
                <img
                  src={activBtn}
                  alt="Button"
                  className="element-bots__icons"
                ></img>
              </li>
              <li className="element-bots__position">
                <p className="element__title">GRID</p>
                <img
                  src={activBtn}
                  alt="Button"
                  className="element-bots__icons"
                ></img>
              </li>
              <li className="element-bots__position">
                <p className="element__title">HODL</p>
                <img
                  src={inactivBtn}
                  alt="inactive Button"
                  className="element-bots__icons"
                ></img>
              </li>
            </ul>
          </nav>
        </div>

        <button className="navbar__menu_button">Settings</button>

        <div className="navbar__menu_profile">
          <div className="element-profile">
            <img src={user} className="element-profile__img" alt="Avatar"></img>
            <div>
              <h3 className="element-profile__name">Oleg Veber</h3>
              <p className="element-profile__plan">Standart Plan</p>
            </div>
          </div>
          <div className="element-profile__logout">
            <img src={logout} alt="log-out"></img>
            <p onClick={handleLogOut} className="element-profile__logout_title">
              Log out
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
