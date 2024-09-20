import "./App.css";
import { ModeToggle } from "./components/layout/sidebar/ModeToggle/ModeToggle";
import { graphs } from "./data/data";

function App() {
  const fakeGraphsData = graphs;

  return (
    <>
      <div className="bg-red-500 flex flex-col gap-4">
        <ModeToggle />
        <p>HELLO</p>
      </div>
      <div>{JSON.stringify(fakeGraphsData, null, 2)}</div>
    </>
  );
}

export default App;
