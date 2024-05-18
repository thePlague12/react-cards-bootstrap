import "./App.css";
import Cards from "./Cards";

function App() {
  return (
    <div className="container d-flex justify-content-center align-item-center h-100">
      <div className="row">
        <div className="col-md-4">
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;
