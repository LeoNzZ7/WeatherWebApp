import { ArrowUUpLeft, Moon, Sun, SunHorizon } from "phosphor-react";
import { formatTemp, formatWindSpeed } from "../helpers/helpers.functions";
import { WeatherInfo } from "../types/types";
import { useState, useEffect } from 'react';
 
type Props = {
    open: boolean;
    info?: WeatherInfo;
    index: number;
    setClose: (close: boolean) => void
}

export const ModalInfo = ({ open, info, index, setClose }: Props) => {
    const [windDirection, setWindDirection] = useState('');
    
    const HandleWindDirection = () => {
        if(info?.current.wind_deg as number >= 0 && info?.current.wind_deg as number <= 45) {
            setWindDirection('LESTE');
        } else if (info?.daily[index].wind_deg as number >= 45 && info?.daily[index].wind_deg as number <= 90) {
            setWindDirection('SUDESTE');
        } else if (info?.daily[index].wind_deg as number >= 90 && info?.daily[index].wind_deg as number <= 135) {
            setWindDirection('SUL');
        } else if (info?.daily[index].wind_deg as number >= 135 && info?.daily[index].wind_deg as number <= 180) {
            setWindDirection('SUDOESTE');
        } else if (info?.daily[index].wind_deg as number >= 135 && info?.daily[index].wind_deg as number <= 180) {
            setWindDirection('OESTE');
        } else if (info?.daily[index].wind_deg as number >= 225 && info?.daily[index].wind_deg as number <= 270) {
            setWindDirection('NOROESTE');
        } else if (info?.daily[index].wind_deg as number >= 270 && info?.daily[index].wind_deg as number <= 305) {
            setWindDirection('NORTE');
        } else if (info?.daily[index].wind_deg as number >= 305 && info?.daily[index].wind_deg as number <= 360) {
            setWindDirection('NORDESTE');
        }
    }; 

    useEffect(HandleWindDirection, [info, open])

    return(
        <>
        {open &&
            <div className="fixed top-0 left-0 w-screen flex justify-center items-center h-screen text-white p-10 bg-slate-800" >
                <ArrowUUpLeft size={40} onClick={e => setClose(false)} className='fixed top-4 left-4 cursor-pointer'/>
                <div className="bg-slate-900 p-2 flex justify-between rounded-xl shadow-xl border-2 border-slate-800 shadow-slate-900 w-8/12 h-[500px]" >
                    <div className="w-12/12 h-full mx-2 p-2 flex flex-wrap items-center bg-slate-900 rounded-xl" >
                        <div className="bg-slate-800 w-full flex justify-evenly p-2 h-2/6 rounded-xl">
                            <div className="bg-slate-900 w-3/12 rounded-xl flex flex-col justify-evenly items-center" >
                                <h1 className="text-xl font-bold">Manha</h1>
                                <SunHorizon size={40} weight="bold" />
                                <h1 className="text-xl font-bold">{formatTemp(info?.daily[index].temp.day as string)}</h1>
                            </div>
                            <div className="bg-slate-900 w-3/12 rounded-xl flex flex-col justify-evenly items-center">
                                <h1 className="text-xl font-bold">Manha</h1>
                                <Sun size={40} weight="bold" />
                                <h1 className="text-xl font-bold">{formatTemp(info?.daily[index].temp.eve as string)}</h1>
                            </div>
                            <div className="bg-slate-900 w-3/12 rounded-xl flex flex-col justify-evenly items-center">
                                <h1 className="text-xl font-bold">Manha</h1>
                                <Moon size={40} weight="bold" />
                                <h1 className="text-xl font-bold">{formatTemp(info?.daily[index].temp.night as string)}</h1>
                            </div>
                        </div>
                        <div className="bg-slate-800 w-full flex justify-evenly p-2 h-2/6 rounded-xl">
                            <div className="bg-slate-900 w-3/12 rounded-xl flex flex-col justify-end items-center p-2">
                                <img className="w-20 h-20" src={`http://openweathermap.org/img/wn/${info?.daily[index].weather[0].icon}@2x.png`} />
                                <h1 className="text-xl font-bold text-center">{info?.daily[index].weather[0].description}</h1>
                            </div>
                            <div className="bg-slate-900 w-3/12 rounded-xl flex flex-col justify-between items-center p-2">
                                <h1 className="text-center text-xl font-bold flex item-center">Velocidade do vento</h1>
                                <h1 className="font-bold text-xl">{formatWindSpeed(info?.daily[index].wind_speed as string)}</h1>
                            </div>
                            <div className="bg-slate-900 w-3/12 rounded-xl flex flex-col justify-between items-center p-2">
                                <h1 className="text-center text-xl font-bold flex item-center">Direção do vento</h1>
                                <h1 className="font-bold text-xl">{windDirection}</h1>
                            </div>
                        </div>
                        <div className="bg-slate-800 flex justify-evenly items-center w-full h-1/6 rounded-xl">
                            <div className="w-5/12 h-2/3 bg-slate-900 flex flex-col justify-center items-center rounded-xl">
                                <h1 className="text-[14px] font-bold">Humidade relativa do ar</h1>
                                <h1 className="font-bold" >{info?.daily[index].humidity}%</h1>
                            </div>
                            <div className="w-5/12 h-2/3 bg-slate-900 flex flex-col justify-center items-center rounded-xl">
                                <h1 className="text-[14px] font-bold">Pressao atmosférica</h1>
                                <h1 className="font-bold">{info?.daily[index].pressure}hPa</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
}