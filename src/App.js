import "./App.css";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Cards img={"https://millionstatusov.ru/pic/statpic/all8/5e04c21a52a39.jpg"}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button className="btn btn-primary">Go somewhere</button>
        </div>
      </Cards>

      <Cards >
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button className="btn btn-primary">Go somewhere</button>
        </div>
      </Cards>
    </div>
  );
}

export default App;
