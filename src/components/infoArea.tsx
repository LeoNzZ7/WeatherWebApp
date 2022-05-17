import { Moon, Sun, SunHorizon, Wind } from "phosphor-react";
import { useEffect, useState } from "react";
import { WeatherInfo } from "../types/types";
import { formatTemp, getDay, getMonth, formatWindSpeed } from '../helpers/helpers.functions'
import { ModalInfo } from "./modalInfo";

type Props = {
    info?: WeatherInfo;
    location: string;
}

export const InfoArea = ({ info, location }: Props) => {
    const [windDirection, setWindDirection] = useState('');
    const [index, setIndex] = useState(0);
    const [open, setOpen] = useState(false);

     const HandleWindDirection = () => {
        if(info?.current.wind_deg as number >= 0 && info?.current.wind_deg as number <= 45) {
            setWindDirection('LESTE');
        } else if (info?.current.wind_deg as number >= 45 && info?.current.wind_deg as number <= 90) {
            setWindDirection('SUDESTE');
        } else if (info?.current.wind_deg as number >= 90 && info?.current.wind_deg as number <= 135) {
            setWindDirection('SUL');
        } else if (info?.current.wind_deg as number >= 135 && info?.current.wind_deg as number <= 180) {
            setWindDirection('SUDOESTE');
        } else if (info?.current.wind_deg as number >= 135 && info?.current.wind_deg as number <= 180) {
            setWindDirection('OESTE');
        } else if (info?.current.wind_deg as number >= 225 && info?.current.wind_deg as number <= 270) {
            setWindDirection('NOROESTE');
        } else if (info?.current.wind_deg as number >= 270 && info?.current.wind_deg as number <= 305) {
            setWindDirection('NORTE');
        } else if (info?.current.wind_deg as number >= 305 && info?.current.wind_deg as number <= 360) {
            setWindDirection('NORDESTE');
        }
    };

    useEffect(HandleWindDirection, [info])

    return(
        <>  
        <ModalInfo index={index} info={info} open={open} setClose={setOpen} />
        {info &&
        <div className="w-4/5 h-[550px] rounded-xl shadow-md shadow-neutral-900 bg-slate-900">
            <div className="h-[60px] mx-5 mb-[20px] mt-[15px] flex rounded-xl items-center justify-center bg-slate-800">
                <h1 className="text-white text-[30px]">
                    {location}
                </h1>
            </div>
            <div className="h-[300px] mx-5 p-5 flex justify-between text-white rounded-xl bg-slate-800">
                <div className="w-full h-full flex flex-col">
                    <div className="flex justify-around" >
                        <div className="bg-slate-900 flex p-2 flex-col shadow-md font-bold text-2xl shadow-slate-900 rounded-xl w-[42%] h-full justify-evenly items-center">
                            <h1>Temperatura</h1>
                            <h1 className="font-bold text-4xl">{formatTemp(info.current.temp)}</h1>
                        </div>
                            <div className="bg-slate-900 flex p-2 flex-col shadow-md font-bold text-2xl shadow-slate-900 rounded-xl w-[42%] h-full justify-around items-center">
                            <img className="w-20 h-20" src={`http://openweathermap.org/img/wn/${info.current.weather[0].icon}@2x.png`} alt="iMG"/>
                            <p className="text-center text-lg">{info.current.weather[0].description}</p>
                        </div>
                    </div >
                    <div className="w-full h-[250px] p-4 rounded-xl" >
                        <div className="w-[100%] h-[120px] p-4 flex justify-around shadow-md shadow-slate-900 rounded-xl bg-slate-900" >
                            <div className="w-[30%] bg-slate-800 rounded-xl flex flex-col items-center justify-evenly h-full text-center" >
                                <SunHorizon size={30} />
                                <h1 className="font-bold text-2xl">{formatTemp(info.daily[0].temp.day)}</h1>
                            </div>
                            <div className="w-[30%] bg-slate-800 rounded-xl h-full text-center flex flex-col items-center justify-evenly">
                                <Sun size={30} />
                                <h1 className="font-bold text-2xl">{formatTemp(info.daily[0].temp.eve)}</h1>
                            </div>
                            <div className="w-[30%] bg-slate-800 rounded-xl h-full text-center flex flex-col items-center justify-evenly">
                                <Moon size={30} />
                                <h1 className="font-bold text-2xl">{formatTemp(info.daily[0].temp.night)}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-900 flex p-2 mr-4 flex-col shadow-md font-bold text-2xl shadow-slate-900 rounded-xl w-[35%] h-6/6 justify-around items-center">
                    <Wind size={75} />
                    <h1>{windDirection}</h1>
                    <div className="text-center">
                        <span className="text-xl text-center" >
                            Velocidade do vento
                        </span>
                        <div className="text-center text-xl " >
                            {formatWindSpeed(info.current.wind_speed)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[120px] p-2 mx-5 rounded-xl mt-[20px] flex bg-slate-800">
                <div className=" flex w-full justify-evenly items-center">
                    {info.daily.map((item, index) => (
                        <div key={index} onClick={e => setOpen(true)} className="w-[11%] cursor-pointer p-2 text-white h-full rounded-xl bg-slate-900">
                            <div onClick={e => setIndex(index)} >
                                <h1 className="text-center text-base font-bold">{getDay() + index}/{getMonth() + 1}</h1>    
                                <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}/>
                                <div className="text-center text-sm font-bold">{formatTemp(item.temp.day)}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        }
        </>
    )
}