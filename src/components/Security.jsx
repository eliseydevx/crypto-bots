import React from "react";

function Security() {
  return (
    <div className="main-page__block2">
      <h2 className="panel__title">Security</h2>
      <div className="panel__security-position">
        <h3 className="panel__security-text">Two-factor authentication</h3>
        <input type="checkbox" className="switch__input" />
      </div>
      <div className="panel__security-position">
        <h3 className="panel__security-text">IP-address check</h3>
        <input type="checkbox" className="switch__input" />
      </div>
      <div className="panel__security-devices">
        <h3 className="panel__security-text">Devices and activity</h3>
        <p className="panel__security-num">4</p>
      </div>
      <div className="panel__security-devices_current">
        <ul className="devices__table">
          <li className="devices__table-text">Google Chrome</li>
          <li className="devices__table-text">Apple Iphone X</li>
          <li className="devices__table-text">Yandex Browser</li>
        </ul>
        <ul className="devices__table">
          <li className="devices__table-text">London</li>
          <li className="devices__table-text">London</li>
          <li className="devices__table-text">New York</li>
        </ul>
        <ul className="devices__table">
          <li className="devices__table-text">2:54</li>
          <li className="devices__table-text">3:59</li>
          <li className="devices__table-text">12:16</li>
        </ul>
      </div>
      <button className="panel__btn">Show more details</button>
    </div>
  );
}

export default Security;
