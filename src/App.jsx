import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="flex fixed bottom-12 inset-x-0 justify-center">
          <div className="flex flex-wrap gap-3 shadow-lg bg-white rounded-3xl justify-center px-3 py-2">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => setColor("gray")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "gray" }}
            >
              Gray
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
