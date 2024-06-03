// Events.js
import React, { useState } from "react";
import "./events.css";
import Popup from "../popup/Popup";

const Events = () => {
  const data = [
    {
      id: 1,
      title: "Ideathon",
      description:
        "Join us for the 'Innovate & Impact: College Ideathon 2024', a dynamic and collaborative event designed to unleash your creativity and problem-solving skills! This Ideathon is an exciting opportunity for students across all disciplines to come together, brainstorm, and develop innovative solutions to real-world challenges. Whether you're an aspiring entrepreneur, a tech enthusiast, a social activist, or simply someone with a passion for creativity, this event is for you!",
      logo: "eclub.png",
      date: "September 20th 2024",
      time: "9:00 AM",
      venue: "Veeksha Hall",
    },
    {
      id: 2,
      title: "Dance Workshop",
      description:
        "Get ready to move and groove at 'Dance Fusion: College Workshop 2024', an exhilarating dance workshop designed for students of all skill levels! Whether you're a seasoned dancer or a complete beginner, this workshop offers a fantastic opportunity to learn new styles, improve your technique, and express yourself through dance. Join us for an unforgettable experience of rhythm, movement, and creativity, all in a fun and supportive environment.",
      logo: "Kalakrithi.jpg",
      date: "January 2, 2023",
      time: "11:00 AM - 6:00 PM",
      venue: "Kinnera Hall",
    },
    {
      id: 3,
      title: "Tech Trivia",
      description:
        "Are you a tech enthusiast who loves to keep up with the latest in technology? Do you have a knack for solving puzzles and answering trivia questions? If so, then the 'Tech Trivia Challenge 2024' is the perfect event for you! Join us for an exciting and intellectually stimulating trivia competition that tests your knowledge of all things tech. Compete with fellow students, showcase your expertise, and win amazing prizes!",
      logo: "github.png",
      date: "January 3, 2023",
      time: "12:00 PM - 7:00 PM",
      venue: "Manjeera Hall",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

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
          <img src={`/assets/${event.logo}`} alt={event.title} />
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
