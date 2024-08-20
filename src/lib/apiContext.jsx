// AuthContext.js
import React, { createContext, useContext } from 'react';

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const backendApi = "http://localhost:3001/api";

  return (
    <ApiContext.Provider value={{ backendApi }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);
