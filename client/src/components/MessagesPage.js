import React, { useEffect, useState } from 'react';
import chevronDown from '../assets/chevron-down.svg';
import animalAvatar from '../assets/dog.jpeg';
import martinAnimalAvatar from '../assets/martinAnimalAvatar.png';
import joseAnimalAvatar from '../assets/joseAnimalAvatar.png';
import daphneAnimalAvatar from '../assets/daphneAnimalAvatar.png';
import chrisAnimalAvatar from '../assets/chrisAnimalAvatar.png';
import martinAvatar from '../assets/martinAvatar.svg';
import joseAvatar from '../assets/joseAvatar.svg';
import daphneAvatar from '../assets/daphneAvatar.svg';
import chrisAvatar from '../assets/chrisAvatar.svg';
import janeAvatar from '../assets/jane-avatar.svg';
import { useLocation } from 'react-router-dom';

const MessagesPage = () => {
  const location = useLocation();
  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    // Extract sessionId from URL query parameters
    const searchParams = new URLSearchParams(location.search);
    const sessionId = searchParams.get('id');
    setSessionId(sessionId);
  }, [location.search]);

  const getChatUrl = () => {
    if (!sessionId) {
      return '/chat'
    }
    return `/chat?id=${sessionId}`
  }

  const chatUrl = getChatUrl();

  const data = [
    {
      id: 0,
      userName: 'Jane',
      animalName: 'Rudy',
      message: "Who is Rudy's veterinarian?",
      time: 'Today',
      userAvatar: janeAvatar,
      animalAvatar: animalAvatar,
      readyToAdopt: true
    },
    {
      id: 1,
      userName: 'Chris',
      animalName: 'Fable',
      message: "Can you tell me if Fable is good with...",
      time: 'Yesterday',
      userAvatar: chrisAvatar,
      animalAvatar: chrisAnimalAvatar,
      readyToAdopt: true
    },
    {
      id: 2,
      userName: 'Daphne',
      animalName: 'Benjamin',
      message: 'Do you transport to other locations...',
      time: 'Yesterday',
      userAvatar: daphneAvatar,
      animalAvatar: daphneAnimalAvatar,
      readyToAdopt: true
    },
    {
      id: 3,
      userName: 'Jose',
      animalName: 'Milo',
      message: "Is it possible for the shelter to assis...",
      time: 'Yesterday',
      userAvatar: joseAvatar,
      animalAvatar: joseAnimalAvatar,
      readyToAdopt: false
    },
    {
      id: 4,
      userName: 'Martin',
      animalName: 'Casper',
      message: "Can Casper live without a Fence?",
      time: '2 days ago',
      userAvatar: martinAvatar,
      animalAvatar: martinAnimalAvatar,
      readyToAdopt: false
    },
  ];

  const readyToAdoptData = data.filter(item => item.readyToAdopt);
  const justAskingQuestionsData = data.filter(item => !item.readyToAdopt);

  return (
    <>
      <div className="heading__container">
        <h1>Messages / Inquiries</h1>
      </div>
      <div className="sort__container">
        <p>Sort By</p>
        <div className="sort__container__name">Pet Name <img src={chevronDown} alt="chevron down" /></div>
      </div>

      <div className="subHeading__container">
        <h2>Ready To Adopt</h2>
      </div>

      {readyToAdoptData.map((item) => (
        <a key={item.id} className="card" href={chatUrl}>
          <div className="card__avatar__container">
            <img src={item.animalAvatar} className="card__animal__avatar" alt="animal" />
            {item.userAvatar ? (
              <img src={item.userAvatar} className="status card__user__avatar" alt="user" />
            ) : (
              <span className="status card__avatar__indicator"></span>
            )}
          </div>
          <div className="card__text__container">
            <p className="user">{item.userName}</p>
            <p className="animal">For {item.animalName}</p>
            <p className="messages">{item.message}</p>
            <p className="time">{item.time}</p>
          </div>
        </a>
      ))}

      <div className="subHeading__container">
        <h2>Just Asking Questions</h2>
      </div>

      {justAskingQuestionsData.map((item) => (
        <a key={item.id} className="card" href={chatUrl}>
          <div className="card__avatar__container">
            <img src={item.animalAvatar} className="card__animal__avatar" alt="animal" />
            {item.userAvatar ? (
              <img src={item.userAvatar} className="status card__user__avatar" alt="user" />
            ) : (
              <span className="status card__avatar__indicator"></span>
            )}
          </div>
          <div className="card__text__container">
            <p className="user">{item.userName}</p>
            <p className="animal">For {item.animalName}</p>
            <p className="messages">{item.message}</p>
            <p className="time">{item.time}</p>
          </div>
        </a>
      ))}
    </>
  );
};

export default MessagesPage;
