import React, { useEffect, useState } from 'react';
import chevronDown from '../assets/chevron-down.svg';
import animalAvatar from '../assets/dog.jpeg';
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
      userName: 'Matt',
      animalName: 'Rudy',
      message: 'Is Rudy good with kids?',
      time: 'yesterday',
      userAvatar: null,
      animalAvatar: animalAvatar,
      readyToAdopt: true,
    },
    {
      id: 1,
      userName: 'Chris',
      animalName: 'Rudy',
      message: 'What else can you tell me about Rudy?',
      time: '1h ago',
      userAvatar: null,
      animalAvatar: animalAvatar,
      readyToAdopt: false
    },
    {
      id: 2,
      userName: 'Daphne',
      animalName: 'Rudy',
      message: 'Do you transport to other locations?',
      time: '2d ago',
      userAvatar: null,
      animalAvatar: animalAvatar,
      readyToAdopt: true
    },
    {
      id: 3,
      userName: 'Jose',
      animalName: 'Rudy',
      message: 'Can Rudy live without a fence?',
      time: 'yesterday',
      userAvatar: null,
      animalAvatar: animalAvatar,
      readyToAdopt: false
    },
    {
      id: 3,
      userName: 'Jane',
      animalName: 'Rudy',
      message: 'How old is Rudy?',
      time: '2d ago',
      userAvatar: janeAvatar,
      animalAvatar: animalAvatar,
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
