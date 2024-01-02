import "./App.css";

import { Footer } from "./Components/Footer";
import { Note } from "./Components/Note";
import { useSelector } from "react-redux";

function App() {
  const data = useSelector((state) => state.Reducer.data);

  return (
    <div id="mainContainer">
      <div className="container">
        {data.map((el, i) => (
          <Note data={el} key={i} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
