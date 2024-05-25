import React from 'react';
import './popup.css';

const Popup = ({ onClose, card }) => {
  return (
    <div className="popup-container">
      <div className="popup-box">
        <img src={`/assets/${card.image}`} alt={card.title} />
        <h2>{card.title}</h2>
        <p>{card.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;