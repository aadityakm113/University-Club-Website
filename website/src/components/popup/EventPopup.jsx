import React from 'react';
import './eventPopup.css';

const EventPopup = ({ onClose, event }) => {
  return (
    <div className="event-popup-container">
      <div className="event-popup-box">
        <img src={`/assets/Images/${event.image}`} alt={event.title} />
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        <p>{event.date} | {event.time}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EventPopup;