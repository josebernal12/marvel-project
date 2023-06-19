/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const MarvelContext = createContext();

const MarvelProvider = ({ children }) => {
  const [series, setSeries] = useState([]);

  const changeSeries = (serie) => {
    setSeries(serie);
  };

  return (
    <MarvelContext.Provider value={{ changeSeries, series }}>
      {children}
    </MarvelContext.Provider>
  );
};

export { MarvelProvider };

export default MarvelContext;
