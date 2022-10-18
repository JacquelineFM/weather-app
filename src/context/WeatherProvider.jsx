import { useState, createContext } from "react";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [search, setSearch] = useState({ city: "", country: "" });

  const searchData = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const checkWeather = (data) => {};

  return (
    <WeatherContext.Provider value={{ search, searchData, checkWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };

export default WeatherContext;
