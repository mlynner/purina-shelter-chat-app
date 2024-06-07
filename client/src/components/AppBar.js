import React from 'react';
import { useNavigate } from 'react-router-dom';
import menuIcon from '../assets/menu.svg';
import searchIcon from '../assets/search.svg';
import petfinderIcon from '../assets/mobile-logo.svg';

const AppBar = () => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem('userName');
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="appBar">
      <div>
        <img className="icon__menu" src={menuIcon} alt="navigation icon" />
        <img src={petfinderIcon} alt="petfinder icon"/>
      </div>
      <div>
        <img className="icon__search" src={searchIcon} alt="search icon" />
        <button onClick={handleLeaveChat} className="btn btn__secondary">New Message</button>
      </div>
    </div>
  );
};

export default AppBar;
