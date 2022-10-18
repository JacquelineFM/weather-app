import Form from "./Form";

const WeatherApp = () => {
  return (
    <div className="w-full lg:px-36 lg:py-14 p-5">
      <header className="w-full shadow bg-white text-center p-5 rounded-lg lg:mb-14 mb-8">
        <a className="text-xl text-gray-800 font-bold" href="#">
          Weather <span className="text-cyan-500">App</span>
        </a>
      </header>
      <main className="grid grid-flow-row gap-8 md:grid-cols-2 lg:gap-20 lg:grid-cols-2">
        <div className="bg-white rounded-lg shadow w-full mx-auto p-8 h-fit">
          <Form />
        </div>
        <div className="bg-white rounded-lg shadow w-full mx-auto p-8 h-fit"></div>
      </main>
    </div>
  );
};

export default WeatherApp;
