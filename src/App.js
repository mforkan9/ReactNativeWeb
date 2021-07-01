import { useState, useEffect } from "react";
import Home from "./components/Home";

 function App() {
  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight
  });
  const updateSize = () =>
    setSize({
      x: window.innerWidth,
      y: window.innerHeight
    });
  useEffect(() => (window.onresize = updateSize), []);
  return (
    <>
      <p>width is : {size.x}</p>
      <p>height is : {size.y}</p>
      {
        size.x <= 500 && <h2>ami 500</h2> || size.x <= 700 && <h1>ani 700</h1> || size.x <= 1000 && <h1>ami 1000</h1>
      }
    <Home></Home>
    </>
  );
}
export default App;