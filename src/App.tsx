import { InfoArea } from "./components/infoArea";
import { SearchArea } from "./components/searchArea";
import { useState } from "react";
import { WeatherInfo } from "./types/types";

const App = () => {
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>();
  const [location, setLocation] = useState('');

  const handleReset = () => {
    setWeatherInfo(undefined);
  };

  console.log(weatherInfo)

  return(
    <div className="h-screen flex bg-slate-800">
      <div className="w-2/5 p-6 h-screen bg-slate-900 shadow-2xl shadow-neutral-900">
        <SearchArea handleReset={handleReset} handleLocationInfo={setLocation} handleWeatherInfo={setWeatherInfo} />
        <div className="text-white text-center">desenvolvido com 💜 por <a href="https://www.linkedin.com/in/leonardo-nunes-martinha-68052522b/" target='_blank'>Leonardo Nunes Martinha</a></div>
      </div>
      <div className="w-full flex justify-center items-center">
        <InfoArea info={weatherInfo} location={location} />
      </div>
    </div>
  );
}

export default App;