import { useEffect } from "react";
import clientAxios from "../config/axios";
import { useMarvel } from "../hooks/useMarvel";
import { Serie } from "../components/Serie";

export const Series = () => {
  const { changeSeries, series } = useMarvel();
  useEffect(() => {
    const consultApi = async () => {
      const { data } = await clientAxios(
        `/series?ts=1&apikey=${import.meta.env.VITE_API_KEY}&hash=${
          import.meta.env.VITE_API_HASH
        }`
      );

      changeSeries(data.data.results);
    };
    consultApi();
  }, []);

  return (
    <div>
      <p className="text-white">Series</p>

      {series.map((serie) => (
        <Serie key={serie.id} serie={serie} />
      ))}
    </div>
  );
};
