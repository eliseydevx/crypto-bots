import React from "react";
import bnc from "../image/binance.svg";
import one from "../image/1.svg";
import two from "../image/2.svg";
import three from "../image/3.svg";
import close from "../image/x.svg";
import { useNavigate } from "react-router-dom";

function Authorization() {
  const navigate = useNavigate();
  const handleConnect = () => {
    navigate("/main-page");
  };
  return (
    <div className="auth">
      <div className="auth__modal">
        <div>
          <h3 className="auth__title">
            Connect exchange{" "}
            <img className="auth__logo" src={bnc} alt="Binance" /> Binance
          </h3>
          <img className="auth__close" src={close} alt="close"></img>
        </div>
        <div className="auth__position">
          <ul className="auth__list">
            <li className="auth__list_li">
              <img className="auth__nums" src={one} alt="number" />
              <p className="auth__subtitle">
                Log in to your account on the website Binance
              </p>
            </li>
            <li className="auth__list_li">
              <img className="auth__nums" src={two} alt="number" />
              <p p className="auth__subtitle">
                Click on the "Connect" button
              </p>
            </li>
            <li className="auth__list_li">
              <img className="auth__nums" src={three} alt="number" />
              <p p className="auth__subtitle">
                Confirm your connection to EEE
              </p>
            </li>
          </ul>
        </div>
        <button className="auth__btn" onClick={handleConnect}>
          Connect Binance
        </button>
      </div>
    </div>
  );
}

export default Authorization;
