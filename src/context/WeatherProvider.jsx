import { useState, createContext } from "react";
import axios from "axios";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [noResult, setNoResult] = useState("");
  const [search, setSearch] = useState({ city: "", country: "" });

  /**
   * When the user types in the search bar, the searchData function will update the state of the search
   * object with the value of the input.
   */
  const searchData = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * The checkWeather function is an async function that takes a search object as an argument. It sets
   * the loading state to true, sets the noResult state to false, and then tries to get the city and
   * country from the search object. It then gets the appId from the environment variable, and sets the
   * url to the openweathermap api. It then gets the data from the url, and gets the lat and lon from the
   * data. It then sets the urlWeather to the openweathermap api with the lat and lon. It then gets the
   * weatherData from the urlWeather, and sets the weather state to the weatherData.
   */
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
