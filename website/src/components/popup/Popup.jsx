import React from "react";
import "./popup.css";

const Popup = ({ onClose, data, type }) => {
  return (
    <div className="popup-container">
      <div className="popup-box">
        {type === "home" ? (
          <div>
            <img src={`/assets/${data.image}`} alt={data.title} />
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>
        ) : (
          <div>
            <img className="ev" src={`/assets/${data.logo}`} alt={data.title} />
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>
              {data.date} | {data.time}
            </p>
          </div>
        )}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
