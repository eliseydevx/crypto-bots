import React from "react";

function Language() {
  return (
    <div className="main-page__block4">
      <h2 className="panel__title">Language</h2>
      <p className="panel__info-name">Language</p>
      <select className="panel__select" name="language">
        <option value="">English</option>
        <option value="Russian">Russian</option>
        <option value="German">German</option>
      </select>
      <p className="panel__info-name">Timezone</p>
      <select className="panel__select" name="language">
        <option value="">UTC: +07:00 Asia/Novosibirsk</option>
        <option value="Russian">UTC: +07:00 Asia/Novosibirsk</option>
        <option value="German">UTC: +07:00 Asia/Novosibirsk</option>
      </select>
      <p className="panel__info-name">Referral code</p>

      <input className="panel__input" value="Code"></input>
      <button className="panel__btn-submit" type="submit">
        Apply
      </button>

      <p className="panel__ref-text">Share your own code to get discount</p>
    </div>
  );
}

export default Language;
