import React from "react";
import zap from "../image/zap.svg";

function Billing() {
  return (
    <div className="main-page__block3">
      <h2 className="panel__title">Billing</h2>
      <div className="panel__subscribe">
        <div className="panel__subscribe_text">
          <p className="panel__subscribe_title">Subscription plan</p>
          <h3 className="panel__subscribe_subtitle">Standard mode</h3>
          <button className="panel__subscribe_btn">Upgrade your plan</button>
        </div>
        <img src={zap} className="panel__subscribe_img" alt="img"></img>
      </div>
      <p className="panel__info-name">Billing address</p>
      <h3 className="panel__info">Bank account, **88</h3>
      <button className="panel__btn">Change address</button>
      <div className="panel__connect">
        <p className="panel__connect-text">
          You have <br />
          <span>8</span> connections
        </p>
        <button className="panel__btn">Manage connections</button>
      </div>
    </div>
  );
}

export default Billing;
