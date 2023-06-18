import { useContext } from "react";
import MarvelContext from "../context/MarvelProvider";

export const useMarvel = () => {
  return useContext(MarvelContext);
};
