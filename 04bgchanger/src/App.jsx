import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
      }}
    >
      Background should be red
    </div>
  );
}

export default App;

