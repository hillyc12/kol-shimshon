import "./App.css";
//import Test from "./Components/Test/Test";
import Tephilos from "./Components/Tephilos/Tephilos";
import Card from "./Components/UI/Card";
import ZemanimForDay from "./Components/Zemanim/ZemanimForDay";

const dispDate = new Date();

function App() {
  return (
    <Card>
      <h1 className="App-header"> Zemanin Kol Shimshon </h1>
      <Tephilos date={dispDate} />
      <ZemanimForDay />
    </Card>
  );
}

export default App;
