/* eslint-disable react/prop-types */
import { createContext } from "react";

const MarvelContext = createContext();

const MarvelProvider = ({ children }) => {
  

    return (
        <MarvelContext.Provider value={{}}>

        {children}
      </MarvelContext.Provider>
    )
};

export { MarvelProvider };

export default MarvelContext;
