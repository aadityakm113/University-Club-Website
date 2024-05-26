import React from 'react';
import './events.css';
import Popup from '../popup/Popup';

const Events = () => {
  const data = [
    {
      id: 1,
      title: 'Event 1',
      description: 'This is event 1 description.',
      image: 'event1.jpg',
      date: 'January 1, 2023',
      time: '10:00 AM - 5:00 PM',
    },
    {
      id: 2,
      title: 'Event 2',
      description: 'This is event 2 description.',
      image: 'event2.jpg',
      date: 'January 2, 2023',
      time: '11:00 AM - 6:00 PM',
    },
    {
      id: 3,
      title: 'Event 3',
      description: 'This is event 3 description.',
      image: 'event3.jpg',
      date: 'January 3, 2023',
      time: '12:00 PM - 7:00 PM',
    },
  ];

  const [showModal, setShowModal] = React.useState(false);
  const [selectedEvent, setSelectedEvent] = React.useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  return (
    <div className="events-container">
      {data.map((event, idx) => (
        <div key={idx} className="event" onClick={() => handleEventClick(event)}>
          <img src={`/assets/Images/${event.image}`} alt={event.title} />
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <p>{event.date} | {event.time}</p>
        </div>
      ))}
      {showModal && (
        <Popup
          onClose={() => setShowModal(false)}
          event={selectedEvent}
        />
      )}
    </div>
  );
};

export default Events;