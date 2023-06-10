import { useState, useEffect } from "react";

function App() {
  const [BGcolor, setBGColor] = useState("white");

  const click = (BGcolor) => {
    setBGColor(BGcolor);
  };
  useEffect(() => {
    document.body.style.backgroundColor = BGcolor;
  }, [BGcolor]);

  /* Display clickable
      button */
  return (
    <div className="App">
      <button onClick={() => click("black")}>Change Background Color</button>
    </div>
  );
}

export default App;
