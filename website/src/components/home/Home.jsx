import React, { useEffect, useState } from "react";
import Popup from "../popup/Popup";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import "./home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/clubs")
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  return (
    <div className="home-container">
      {data.map((card, idx) => (
        <div key={idx} className="card" onClick={() => handleCardClick(card)}>
          <img src={`/assets/${card.logo}`} alt={card.title} />
          <h2>{card.title}</h2>
        </div>
      ))}
      {showModal && (
        <Popup
          onClose={() => setShowModal(false)}
          data={selectedCard}
          type="home"
        />
      )}
    </div>
  );
};

export default Home;
