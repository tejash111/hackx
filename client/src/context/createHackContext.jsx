import React, { createContext, useContext, useState } from "react";

const CreateGlobalContext = createContext();

export const CreateHackthonContext = ({ children }) => {
  const [createHackData, setCreateHackData] = useState({});

  return (
    <CreateGlobalContext.Provider value={{ createHackData, setCreateHackData }}>
      {children}
    </CreateGlobalContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(CreateGlobalContext);
  if (!context) {
    throw new Error("useMyContext must be used inside CreateHackthonContext");
  }
  return context;
};

