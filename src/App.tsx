import "./App.css";
import { graphs } from "./data/data";

function App() {
  const fakeGraphsData = graphs;

  return (
    <>
      <div className="bg-red-500">
        <p>HELLO</p>
      </div>
      <div>{JSON.stringify(fakeGraphsData, null, 2)}</div>
    </>
  );
}

export default App;
