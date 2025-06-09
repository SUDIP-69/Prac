import { useState } from "react";

function App() {
  const clr = [
    "#f87171",
    "#fbbf24",
    "#34d399",
    "#60a5fa",
    "#818cf8",
    "#c084fc",
    "#f472b6",
    "#fca5a5",
  ];
  const [color, setColor] = useState(clr[0]);

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap bottom-12 inset-x-0 items-center justify-center px-2">
          <div>
            <div className="flex flex-wrap justify-center gap-2">
              {clr.map((c, index) => (
                <button
                  key={index}
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-200"
                  style={{ backgroundColor: c }}
                  onClick={() => setColor(c)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
