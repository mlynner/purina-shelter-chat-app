import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import menuIcon from '../assets/menu.svg';
import searchIcon from '../assets/search.svg';
import petfinderIcon from '../assets/mobile-logo.svg';
import UserContext from '../context/UserContext';
import { SHELTER_VIEW_KEY } from '../consts/const';
import rudyModal from '../assets/rudy-adopt-modal.png';
import Modal from './Modal';

const AppBar = () => {
  const { userName } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleLeaveChat = () => {
    localStorage.removeItem('userName');
    navigate('/');
    window.location.reload();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <div className="appBar">
      <div>
        <img className="icon__menu" src={menuIcon} alt="navigation icon" />
        <img src={petfinderIcon} alt="petfinder icon"/>
      </div>
      <div>
        <img className="icon__search" src={searchIcon} alt="search icon" />
        {userName !== SHELTER_VIEW_KEY &&(
          <button onClick={openModal} className="btn btn__primary">Did you adopt Rudy?</button>
        )}
        <button onClick={handleLeaveChat} className="btn btn__secondary">New Message</button>
      </div>
    </div>
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <div className="modal__user">
        <div className="d__flex justify__content__center">
          <img src={rudyModal} alt="adopt animal" />
        </div>
        <h2>Did you adopt Rudy?</h2>
        <div className="btn__container d__flex justify__content__center">
          <button onClick={closeModal} className="btn btn__secondary btn__rounded">No</button>
          <button onClick={closeModal} className="btn btn__primary btn__rounded">Yes</button>
        </div>
      </div>
    </Modal>
    </>
  );
};

export default AppBar;
