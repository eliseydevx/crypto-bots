import React from "react";

function PersonalData() {
  return (
    <div className="main-page__block1">
      <h2 className="panel__title">Personal data</h2>
      <p className="panel__info-name">ID</p>
      <h3 className="panel__info">173254</h3>
      <p className="panel__info-name">E-mail</p>
      <h3 className="panel__info">megatrader1982@mail.ru</h3>
      <button className="panel__btn">Change e-mail</button>
      <p className="panel__info-name">Name</p>
      <h3 className="panel__info">Oleg Veber</h3>
      <button className="panel__btn">Change name</button>
    </div>
  );
}

export default PersonalData;
