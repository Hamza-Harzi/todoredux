import "./App.css";
import ListMap from "./component/ListMap";
import AddTask from "./component/AddTask";
import DoneFilter from "./component/DoneFilter";

function App() {
  return (
    <div className="App">
      <DoneFilter />
      <AddTask />
      <ListMap />
    </div>
  );
}

export default App;
