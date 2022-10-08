import React, { createContext } from 'react';
import useAuth from '../hooks/useAuth';

export const UserCtx = createContext();

export const UserProvider = ({ children }) => {
  const { loading, register, authenticated, login, logout } = useAuth();
  return (
    <UserCtx.Provider
      value={{ loading, register, authenticated, login, logout }}
    >
      {children}
    </UserCtx.Provider>
  );
};
