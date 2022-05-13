import { InfoArea } from "./components/infoArea";
import { SearchArea } from "./components/searchArea";

const App = () => {
  return(
    <div className="h-screen flex bg-slate-800">
      <div className="w-2/5 p-6 h-screen bg-slate-900 shadow-2xl shadow-neutral-900">
        <SearchArea/>
      </div>
      <div className="w-full flex justify-center items-center">
        <InfoArea/>
      </div>
    </div>
  );
}

export default App;