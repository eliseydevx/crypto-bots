import React from "react";

function Notifications() {
  return (
    <div className="main-page__block5">
      <div className="panel__notifications_header">
        <h2 className="panel__title">Notifications</h2>
        <button className="panel__btn">Connect telegram bot</button>
      </div>
      <div className="notifications">
        <table className="notifications__table">
          <tr className="notifications__table-tr">
            <td></td>
            <th>Website</th>
            <th>E-mail</th>
            <th>Mobile</th>
            <th>Telegram</th>
          </tr>
          <tr className="notifications__table-tr">
            <th>Security</th>
            <td>
              <input type="checkbox" className="switch__input" />
            </td>
            <td>
              <input type="checkbox" className="switch__input" />
            </td>
            <td>
              <input type="checkbox" className="switch__input" />
            </td>
            <td>
              <input type="checkbox" className="switch__input" />
            </td>
          </tr>
          <tr className="notifications__table-tr">
            <th>DCA bot</th>
            <td>
              <input type="checkbox" className="switch__input" />
            </td>
            <td>
              <input type="checkbox" className="switch__input" />
            </td>
            <td>
              <input type="checkbox" className="switch__input" />
            </td>
            <td>
              <input type="checkbox" className="switch__input" />
            </td>
          </tr>
          <tr className="notifications__table-tr">
            <th>GRID bot</th>
            <td>
              <input type="checkbox" className="switch__input" />
            </td>
            <td>
              <input type="checkbox" className="switch__input" />
            </td>
            <td>
              <input type="checkbox" className="switch__input" />
            </td>
            <td>
              <input type="checkbox" className="switch__input" />
            </td>
          </tr>
          <tr className="notifications__table-tr">
            <th>HODL bot</th>
            <td>
              <input type="checkbox" className="switch__input" />
            </td>
            <td>
              <input type="checkbox" className="switch__input" />
            </td>
            <td>
              <input type="checkbox" className="switch__input" />
            </td>
            <td>
              <input type="checkbox" className="switch__input" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Notifications;
