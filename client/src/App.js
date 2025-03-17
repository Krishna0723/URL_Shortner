import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [url, seturl] = useState("");

  const obj = { url: url };

  function handleSubmit(e) {
    // console.log(url);
    Axios.post("http://localhost:4000/url", obj).then((res) => {
      // console.log(res.data.id);
      document.getElementById("answer").innerHTML =
        "http://localhost:4000/" + res.data.id;
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <textarea
          onChange={(e) => {
            seturl(e.target.value);
          }}
        />
        <br />
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            handleSubmit();
          }}
        >
          Get Link
        </button>
        <p id="answer"></p>
      </header>
    </div>
  );
}

export default App;
