import React from "react";
import "./style.css";

const Journey = () => {
  return (
    <div className="journey-list">
      {[...new Array(9)].map((_, i) => (
        <div key={i} className="journey-card">
          <div className="journey-price">75,00 TL</div>

          <div className="journey__content">
            <div className="info">
              <div className="title_wrapper">
                <div className="title">Kalkış</div>
                <div className="subtitle">09:30</div>
              </div>

              <div className="title_wrapper">
                <div className="title">Varış</div>
                <div className="subtitle">10:30</div>
              </div>
            </div>

            <div className="text">Esenler Otogarı - Ankara Aşti Otogarı</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Journey;
