import Form from "./Form";
import Result from "./Result";
import useWeather from "../hooks/useWeather";

const WeatherApp = () => {
  const { weather } = useWeather();

  return (
    <div className="w-full lg:px-36 lg:py-14 p-5">
      <header className="w-full shadow text-center p-6 rounded-lg lg:mb-14 mb-8 bg-sky-600">
        <a className="text-2xl text-white font-bold" href="/">
          Weather App
        </a>
      </header>
      <main className="grid grid-flow-row gap-8 md:grid-cols-2 lg:gap-20 lg:grid-cols-2">
        <div className="bg-white rounded-lg shadow w-full mx-auto p-10 h-fit border-t-4 border-sky-500">
          <Form />
        </div>
        <div className="bg-white rounded-lg shadow w-full mx-auto p-10 h-fit border-t-4 border-sky-500">
          {weather?.name && <Result />}
        </div>
      </main>
    </div>
  );
};

export default WeatherApp;
