import { API } from "./API"
import { useState, ChangeEvent } from "react";
import { CityCords, WeatherInfo } from "../types/types";
import { ClockClockwise } from "phosphor-react";

type Props = {
    handleWeatherInfo: (info: WeatherInfo) => void;
    handleLocationInfo: (name: string) => void;
    handleReset: () => void;
}

export const SearchArea = ({ handleWeatherInfo, handleLocationInfo, handleReset }: Props) => {
    const api = API;

    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false);  

    const handleSearch = async () => {
        if(location) {
            setLoading(true);
            setLocation('');
            const cords: CityCords = await api.getCityCords(location);
            const getInfoNow: WeatherInfo = await api.getInfoNow(cords.coord.lat, cords.coord.lon);
            setLoading(false);
            handleWeatherInfo(getInfoNow);
            handleLocationInfo(`${cords.name} | ${cords.sys.country}`);
        }
    };

    const handleResetInfo = () => {
        handleReset();
        setLocation('');
        setLoading(false);
    };

    const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setLocation(e.target.value);
    };

    return(
        <div className="h-full w-full flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl">Buscar localização</h1>
            <div className="w-full mt-10 mb-10 flex justify-center">
                <input 
                type='text' 
                value={location}
                onChange={handleSearchInput}
                placeholder="Buscar localização"
                className="p-2 pl-4 rounded-tl-xl rounded-bl-xl transition-opacity text-white bg-slate-800 h-10 w-[375px] outline-none focus:opacity-90 hover:opacity-90"/>
                <button 
                onClick={handleResetInfo} 
                className="p-2 w-[50px] h-10 border-l-2 transition-opacity flex justify-center border-slate-900 bg-slate-800 text-white hover:opacity-90"
                ><ClockClockwise size={25}/></button>
                <button 
                onClick={handleSearch} 
                id="searchButton"
                className="p-2 w-[100px] h-10 transition-opacity border-l-2 border-slate-900 bg-slate-800 rounded-tr-xl rounded-br-xl text-white hover:opacity-90"
                >Buscar</button>
            </div>
            {loading &&
                <h1 className="text-white text-center">Buscando as informações metereológicas, por favor aguarde.</h1>
            }
        </div>
    )
}