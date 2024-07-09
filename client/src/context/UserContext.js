// UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import { SHELTER_VIEW_KEY } from '../consts/const';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('User');

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName === SHELTER_VIEW_KEY ? SHELTER_VIEW_KEY : storedUserName);
    }
  }, []);

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
