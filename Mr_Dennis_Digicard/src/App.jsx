import background from "../src/assets/back.svg";
import "./App.css";

function App() {
  return (
    <div className="w-full bg-red-200 h-screen">
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="max-w-[480px] mx-auto"
      ></div>
    </div>
  );
}

export default App;
