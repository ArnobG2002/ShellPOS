import "./styles/pos.css";
import PumpRow from "./components/PumpRow";
import LeftPanel from "./components/LeftPanel";
import CenterPanel from "./components/CenterPanel";
import BottomBar from "./components/BottomBar";

function App() {
  return (
    <div className="pos-container">
      <PumpRow />
      <div className="grid grid-cols-3">
        <div className="col-span-1" ><LeftPanel/>
      </div>
        
        <div className="col-span-2">
          <CenterPanel />
        </div>
        
      </div>
      <BottomBar />
    </div>
  );
}

export default App;
