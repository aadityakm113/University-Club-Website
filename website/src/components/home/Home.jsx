import React from 'react';
import './home.css';
import Popup from '../popup/Popup';

const Home = () => {
  const data = [
    {
      id: 1,
      title: 'Kalakrithi',
      description: 'The Kalakrithi celebrates creative art in its most popular forms: music, dance and theater. The popular student club is responsible for organizing extra curricular activities on-campus, facilitating GITAMites affinity for arts and culture.',
      image: 'Kalakrithi'
    },
    {
      id: 2,
      title: 'Innovation Center',
      description: 'GITAM’s Innovation Center is a space for enthusiastic students to imagine, collaborate, create and bring their innovative ideas to life. It is a platform to give their creative minds a little more spark.',
      image: 'card2.jpg',
    },
    {
      id: 3,
      title: 'GITAM Quiz club',
      description: 'The main objective of GQC (presumably standing for " Gitam Quiz Club") is to create an engaging platform for conducting quizzes and fostering collaboration with other clubs.',
      image: 'card3.jpg',
    },
    {
      id: 4,
      title: 'GITAM Cooking Club',
      description: 'Bringing all cooking enthusiasts together on an exciting journey into the world of cooking involves creating a vibrant and inclusive community where people can share their passion for food, learn new culinary skills, and explore diverse cuisines.',
      image: 'card3.jpg',
    },
    {
      id: 5,
      title: 'Korean culture club',
      description: "The club's mission to promote a profound understanding and awareness of Korean culture and language through various activities and events is a commendable endeavor that can have a significant impact on the campus community.",
      image: 'card3.jpg',
    },
    {
      id: 6,
      title: 'Engineers Without Borders (EWB)',
      description: "Engineers Without Borders (EWB) is a non-profit organization that works for the development of society. The organization works in collaboration with other institutions to fund and develop ideas that benefit people in low income and rural areas, and offers students real-world experience.",
      image: 'card3.jpg',
    },
    {
      id: 7,
      title: 'Entrepreneurs club',
      description: "To facilitate an active and thriving entrepreneurial ecosystem on the campus.",
      image: 'card3.jpg',
    },
    {
      id: 8,
      title: 'Disha',
      description: "Disha was started by the student body, under the guidance of Dr. Joseph RatnaJaykar, Associate Professor in the Department of English and inaugurated in December 2017.",
      image: 'card3.jpg',
    },
  ];

  const [showModal, setShowModal] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  return (
    <div className="home-container">
      {data.map((card, idx) => (
        <div key={idx} className="card" onClick={() => handleCardClick(card)}>
          <img src={`/assets/Images/${card.image}`} alt={card.title} />
          <h2>{card.title}</h2>
          <p>{card.description}</p>
        </div>
      ))}
      {showModal && (
        <Popup
          onClose={() => setShowModal(false)}
          card={selectedCard}
        />
      )}
    </div>
  );
};

export default Home;