import "./App.css";
import Tephilos from "./Components/Tephilos/Tephilos";
import Card from "./Components/UI/Card";
import ZemanimForDay from "./Components/Zemanim/ZemanimForDay";
import { DateTime } from "luxon";
const dispDate = new Date();
const dtHebrew = DateTime.now().reconfigure({ outputCalendar: "hebrew" });
//dtHebrew.outputCalendar; //=> 'hebrew'
//dtHebrew.toLocaleString();
function App() {
  return (
    <Card>
      <h1 className="App-header"> Zemanin Kol Shimshon </h1>
      <h2 className="App-header2"> {dtHebrew.toLocaleString()} </h2>
      <Tephilos date={dispDate} />
      <ZemanimForDay />
    </Card>
  );
}

export default App;
