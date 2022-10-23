import { useState } from "react";
import Alert from "./Alert";
import useWeather from "../hooks/useWeather";

const Form = () => {
  const { search, searchData, checkWeather } = useWeather();
  const { city, country } = search;
  const [alert, setAlert] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(search).includes("")) {
      setAlert("All fields are required!");
      return;
    }

    setAlert("");
    checkWeather(search);
  };

  return (
    <form className="w-full mx-auto space-y-10" onSubmit={handleSubmit}>
      <div className="space-y-8">
        <div className="flex flex-col justify-between space-y-3">
          <label htmlFor="city" className="font-bold uppercase">
            City
          </label>
          <input
            id="city"
            type="text"
            name="city"
            className="bg-gray-50 rounded-lg border-transparent appearance-none border border-gray-300 py-2.5 px-4 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            placeholder="Colima"
            onChange={searchData}
            value={city}
          />
        </div>
        <div className="flex flex-col justify-between space-y-3">
          <label htmlFor="country" className="font-bold uppercase">
            Country
          </label>
          <select
            id="country"
            name="country"
            className="bg-gray-50 rounded-lg border-transparent appearance-none border border-gray-300 py-2.5 px-4 text-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            onChange={searchData}
            value={country}
          >
            <option value="">-- Select a country --</option>
            <option value="US">United States</option>
            <option value="MX">Mexico</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">Spain</option>
            <option value="PE">Peru</option>
          </select>
        </div>
      </div>
      {alert && <Alert>{alert}</Alert>}
      <input
        type="submit"
        value="Check weather"
        className="py-2.5 px-4 w-full uppercase bg-sky-500 hover:bg-sky-600 focus:ring-sky-400 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer"
      />
    </form>
  );
};

export default Form;
