import React from "react";
import PersonalData from "../components/PersonalData";
import Security from "../components/Security";
import Billing from "../components/Billing";
import Language from "../components/Language";
import Notifications from "../components/Notifications";

function MainPage() {
  return (
    <section className="main-page">
      <header className="main-page__header">
        <h1 className="main-page__header_title">Settings</h1>
      </header>
      <div className="main-page__grid">
        <PersonalData />
        <Security />
        <Billing />
        <Language />
        <Notifications />
      </div>
    </section>
  );
}

export default MainPage;
