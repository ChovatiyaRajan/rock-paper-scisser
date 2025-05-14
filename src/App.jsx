import React, { useState } from "react";

const App = () => {
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [userMove, setUserMove] = useState("");
  const [computerMove, setComputerMove] = useState("");
  const [result, setResult] = useState("");

  const moves = ["rock", "paper", "scissor"];

  const movesIcon = {
    rock: "✊",
    paper: "🖐️",
    scissor: "✌️",
  };

  const computerChoice = () => {
    const randomMove = Math.floor(Math.random() * 3);
    return moves[randomMove];
  };

  const decideWinner = (user, computer) => {
    if (user === computer) {
      return "It's Drow";
    } else if (
      (user === "rock" && computer === "scissor") ||
      (user === "paper" && computer === "rock") ||
      (user === "scissor" && computer === "paper")
    ) {
      setUserScore(userScore + 1);
      return "You Wins 🎉";
    } else {
      setComputerScore(computerScore + 1);
      return "opps! Computer Wins 😅";
    }
  };

  const handelClick = (userSelection) => {
    const getCompChoice = computerChoice();
    setUserMove(userSelection);
    setComputerMove(getCompChoice);
    const gameResult = decideWinner(userSelection, getCompChoice);
    setResult(gameResult);
  };

  return (
    <>
      <div className="text-5xl font-bold text-center flex justify-center gap-20 my-10 py-5 items-center">
        <h1 className="font-bold bg-gradient-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
          Rock
        </h1>
        <h1 className="font-bold bg-gradient-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
          Paper
        </h1>
        <h1 className="font-bold bg-gradient-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
          Scissor
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="flex border-5 h-70 w-200 relative items-center justify-center gap-10">
          <div className="text-4xl sm:absolute sm:left-[-42px] text-white bg-gray-600 rounded px-3 py-2">
            You
          </div>
          <div className="text-6xl">{userScore}</div>
          <div className="text-5xl">:</div>
          <div className="text-6xl">{computerScore}</div>
          <div className="text-4xl sm:absolute sm:right-[-92px] text-white bg-gray-600 rounded px-3 py-2">
            Computer
          </div>
        </div>
      </div>

      <div className="mt-10 text-4xl text-center font-bold bg-gradient-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
        Make Yor Best Move to Win
      </div>

      {userMove && computerMove && (
        <div className="flex justify-center gap-20 mt-8 items-center">
          <div className="text-6xl flex flex-col items-center">
            {movesIcon[userMove]}
            <span className="text-xl mt-2 text-gray-700">You</span>
          </div>
          <div className="text-4xl font-bold">{result}</div>
          <div className="text-6xl flex flex-col items-center">
            {movesIcon[computerMove]}
            <span className="text-xl mt-2 text-gray-700">Computer</span>
          </div>
        </div>
      )}

      <div className="flex justify-around mt-10">
        {/* <button className="text-5xl bg-gradient-to-bl from-violet-500 to-fuchsia-500 rounded-4xl p-5" onClick={()=>console.log("Rock")}>✊</button>
        <button className="text-5xl bg-gradient-to-bl from-violet-500 to-fuchsia-500 rounded-4xl p-5" onClick={()=>console.log("Paper")}>🖐️</button>
        <button className="text-5xl bg-gradient-to-bl from-violet-500 to-fuchsia-500 rounded-4xl p-5" onClick={()=>console.log("Scissor")}>✌️</button> */}
        {moves.map((move) => {
          return (
            <button
              key={move}
              className="text-5xl bg-gradient-to-bl from-violet-500 to-fuchsia-500 rounded-4xl p-5"
              onClick={() => handelClick(move)}
            >
              {movesIcon[move]}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default App;
