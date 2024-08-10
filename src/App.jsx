import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [games, useGames] = useState(["Football", "Volleyball", "BasketBall"]);
  // let count = 0;

  const increseCount = () => {
    // count = count + 1;
    setCount(count + 1);
    console.log(count);
  };
  return (
    <>
      {count > 10 ? <h1>Maximum reached</h1> : <p>{count}</p>}
      <h1>Counter {count}</h1>
      <button
        className="border p-2 bg-blue-500 rounded-lg text-white"
        onClick={increseCount}
      >
        Increase
      </button>
      <div>
        <h1>Games</h1>
        {games.map((game, index) => (
          // console.log(game)
          <p key={index}> {game} </p>
        ))}
      </div>
      <div>
        <button className="border rounded-xl text-white bg-red-500 px-4 py-2 hover:bg-red-700 ">What we learn?</button>
      </div>
    </>
  );
}

export default App;
