// Events.js
import React, { useState,useEffect} from "react";
import "./events.css";
import Popup from "../popup/Popup";
import axios from 'axios'

const Events = () => {
  const [data,setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);


  useEffect(() => {
    axios.get("http://localhost:8000/events")
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  return (
    <div className="events-container">
      {data.map((event, idx) => (
        <div
          key={idx}
          className="event"
          onClick={() => handleEventClick(event)}
        >
          <img src={`/assets/${event.image}`} alt={event.title} />
          <h2>{event.title}</h2>
          <p>
            {event.date} | {event.time}
          </p>
          <p>{event.venue}</p>
        </div>
      ))}
      {showModal && (
        <Popup
          onClose={() => setShowModal(false)}
          data={selectedEvent}
          type="event"
        />
      )}
    </div>
  );
};

export default Events;
