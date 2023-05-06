import { useState } from "react";
import Sidebar from "./Components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Sidebar />
    </>
  );
}

export default App;
