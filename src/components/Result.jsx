import useWeather from "../hooks/useWeather";

const Result = () => {
  const { weather } = useWeather();
  const { name, main, weather: photoWeather, wind, visibility } = weather;
  const { temp, temp_max, temp_min, humidity } = main;
  const { icon, main: weatherCondition } = photoWeather[0];
  const date = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex flex-col rounded w-full">
          <div className="font-bold text-lg">{name}</div>
          <div className="text-sm text-gray-500">{date}</div>
          <div className="mt-2 self-center h-24 w-24">
            <img
              src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${icon}.svg`}
            />
          </div>
          <div className="flex flex-row items-center justify-center space-x-6">
            <div className="font-bold text-5xl">{parseInt(temp)}°</div>
            <div className="flex flex-col items-start">
              <div>{weatherCondition}</div>
              <div className="flex mt-1 space-x-4 items-center">
                <span className="text-sm font-light text-gray-500">
                  {parseInt(temp_max)}°C
                </span>
                <span className="text-sm font-light text-gray-500">
                  {parseInt(temp_min)}°C
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-5 rounded-lg bg-sky-100 px-5 py-2">
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Wind</div>
              <div className="text-sm text-gray-500">
                {parseInt(wind.speed * 3.6)}k/h
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Humidity</div>
              <div className="text-sm text-gray-500">{humidity}%</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Visibility</div>
              <div className="text-sm text-gray-500">
                {parseInt(visibility / 1000)}km
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
