import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");
  const [description, setDescription] = useState("");
  function handleSubmit(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL + "/transaction";
    const price = name.split(" ")[0];
    fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        price,
        name: name.substring(price.length + 1),
        description,
        datetime,
      }),
    }).then((response) => {
      response.json().then((json) => {
        setName("");
        setDatetime("");
        setDescription("");
        console.log("result", json);
      });
    });
  }
  return (
    <main>
      <h1>
        $400<span>.00</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="basic">
          <input
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            placeholder={"+200 new laptop"}
          />
          <input
            type="datetime-local"
            value={datetime}
            onChange={(ev) => setDatetime(ev.target.value)}
          />
        </div>
        <div className="description">
          <input
            type="text"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
            placeholder={"Description"}
          />
        </div>
        <button type="submit">Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New TV</div>
            <div className="description">Old one broke</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2023-02-10 15:15</div>
          </div>
        </div>
      </div>
      <div className="transaction">
        <div className="left">
          <div className="name">New website</div>
          <div className="description">Old one broke</div>
        </div>
        <div className="right">
          <div className="price green">+$400</div>
          <div className="datetime">2023-02-10 15:15</div>
        </div>
      </div>
      <div className="transaction">
        <div className="left">
          <div className="name">New iPhone</div>
          <div className="description">Old one broke</div>
        </div>
        <div className="right">
          <div className="price red">-$900</div>
          <div className="datetime">2023-02-10 15:15</div>
        </div>
      </div>
    </main>
  );
}

export default App;
