// AuthContext.js
import React, { createContext, useContext } from 'react';

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const backendApi = "https://eatario-api-production.up.railway.app/api";

  return (
    <ApiContext.Provider value={{ backendApi }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);
