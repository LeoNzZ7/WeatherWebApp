import { InfoArea } from "./components/infoArea";
import { SearchArea } from "./components/searchArea";
import { useState } from "react";
import { WeatherInfo } from "./types/types";

const App = () => {
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>()
  const [location, setLocation] = useState('');
  console.log(weatherInfo?.daily, weatherInfo?.current)

  return(
    <div className="h-screen flex bg-slate-800">
      <div className="w-2/5 p-6 h-screen bg-slate-900 shadow-2xl shadow-neutral-900">
        <SearchArea handleLocationInfo={setLocation} handleWeatherInfo={setWeatherInfo} />
      </div>
      <div className="w-full flex justify-center items-center">
        <InfoArea info={weatherInfo} location={location} />
      </div>
    </div>
  );
}

export default App;