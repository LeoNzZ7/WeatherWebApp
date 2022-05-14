import { WeatherInfo } from "../types/types"

type Props = {
    info?: WeatherInfo
}

export const InfoArea = ({ info }: Props) => {
    console.log(info?.daily)

    return(
        <div className="w-4/5 h-[550px] rounded-xl shadow-md shadow-neutral-900 bg-slate-900">
            <div className="h-[60px] mx-5 mb-[20px] mt-[15px] flex rounded-xl items-center justify-center bg-slate-800">
                <h1 className="text-white text-[30px]">
                    {
                        
                    }
                </h1>
            </div>
            <div className="h-[300px] mx-5 rounded-xl bg-slate-800">

            </div>
            <div className="h-[120px] mx-5 rounded-xl mt-[20px] flex bg-slate-800">
                
            </div>
        </div>
    )
}