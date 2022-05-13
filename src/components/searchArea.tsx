export const SearchArea = () => {
    return(
        <div className="h-full w-full flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl">Buscar localização</h1>
            <div className="w-full mt-10 mb-10 flex justify-center">
                <input type='text' className="p-2 rounded-tl-xl rounded-bl-xl text-white bg-slate-800 h-10 w-[375px] outline-none focus:opacity-90 hover:opacity-90"/>
                <button className="p-2 w-[100px] h-10 border-l-2 border-slate-900 bg-slate-800 rounded-tr-xl rounded-br-xl text-white hover:opacity-90">Buscar</button>
            </div>
            <div className="w-[475px] rounded-xl bg-slate-800">
                
            </div>
        </div>
    )
}