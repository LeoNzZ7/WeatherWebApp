import { WeatherInfo } from "../types/types"

type Props = {
    info?: WeatherInfo
    location: string
}

export const InfoArea = ({ info, location }: Props) => {
    const formatTemp = (n: string) => {
        const temp = parseInt(n)
        return temp.toFixed(0) + "°C"
    }

    console.log(info?.current.weather[0].icon)

    return(
        <>
        {info &&
        <div className="w-4/5 h-[550px] rounded-xl shadow-md shadow-neutral-900 bg-slate-900">
            <div className="h-[60px] mx-5 mb-[20px] mt-[15px] flex rounded-xl items-center justify-center bg-slate-800">
                <h1 className="text-white text-[30px]">
                    {location}
                </h1>
            </div>
            <div className="h-[300px] mx-5 p-5 flex flex-wrap justify-between text-white rounded-xl bg-slate-800">
                <div className="bg-slate-900 flex p-2 flex-col shadow-md font-bold text-2xl shadow-slate-900 rounded-xl w-[30%] h-3/6 justify-evenly items-center">
                    <h1>Temperatura</h1>
                    <h1 className="font-bold text-4xl">{formatTemp(info.current.temp)}</h1>
                </div>
                <div className="bg-slate-900 flex p-2 flex-col shadow-md font-bold text-2xl shadow-slate-900 rounded-xl w-[30%] h-3/6 justify-around items-center">
                    <img className="w-20 h-20" src={`http://openweathermap.org/img/wn/${info.current.weather[0].icon}@2x.png`} alt="iMG"/>
                    <p>{info.current.weather[0].description}</p>
                </div>
                <div className="bg-slate-900 flex p-2 flex-col shadow-md font-bold text-2xl shadow-slate-900 rounded-xl w-[35%] h-6/6 justify-around items-center">
                   <div className="w-[125px] h-[125px] border-2 rounded-full border-white" >
                        
                   </div>
                </div> 
            </div>
            <div className="h-[120px] mx-5 rounded-xl mt-[20px] flex bg-slate-800">
                
            </div>
        </div>
        }
        </>
    )
}