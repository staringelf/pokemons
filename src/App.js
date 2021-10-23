import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1 id="my-brand">Remember Us..</h1>
      < SearchParams/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
