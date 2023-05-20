import Sidebars from "./Components/Sidebars/Sidebars";
import SignIn from "./Components/Login/SignIn";
import "./Styles/App.css";
import SignUp from "./Components/Login/SignUp";
import RouterPaths from "./RouterPaths";

function App() {
  return (
    <div className="app">
      <RouterPaths />
    </div>
  );
}

export default App;
