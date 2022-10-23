import { useState, createContext } from "react";
import axios from "axios";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [noResult, setNoResult] = useState("");
  const [search, setSearch] = useState({ city: "", country: "" });

  const searchData = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const checkWeather = async (search) => {
    setLoading(true);
    setNoResult(false);

    try {
      const { city, country } = search;
      const appId = import.meta.env.VITE_API_KEY;
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}&units=metric&lang=en`;

      const { data } = await axios(url);
      const { lat, lon } = data[0];
      const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&units=metric&lang=en`;

      const { data: weatherData } = await axios(urlWeather);

      setWeather(weatherData);
    } catch (error) {
      setNoResult("No result!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider
      value={{ weather, loading, noResult, search, searchData, checkWeather }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };

export default WeatherContext;
