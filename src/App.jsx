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
      return "It's Draw";
    } else if (
      (user === "rock" && computer === "scissor") ||
      (user === "paper" && computer === "rock") ||
      (user === "scissor" && computer === "paper")
    ) {
      setUserScore(userScore + 1);
      return "You Win 🎉";
    } else {
      setComputerScore(computerScore + 1);
      return "Oops! Computer Wins 😅";
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-4xl sm:text-6xl font-bold text-center flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 my-10">
          {["Rock", "Paper", "Scissor"].map((item) => (
            <h1
              key={item}
              className="bg-gradient-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent"
            >
              {item}
            </h1>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10">
          <div className="text-2xl sm:text-4xl bg-gray-600 rounded px-3 py-2">
            You
          </div>
          <div className="flex items-center text-4xl sm:text-6xl gap-3">
            <span>{userScore}</span>
            <span>:</span>
            <span>{computerScore}</span>
          </div>
          <div className="text-2xl sm:text-4xl bg-gray-600 rounded px-3 py-2">
            Computer
          </div>
        </div>

        <div className="mt-10 text-2xl sm:text-4xl text-center font-bold bg-gradient-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
          Make Your Best Move to Win
        </div>

        {userMove && computerMove && (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-20 mt-8">
            <div className="text-5xl flex flex-col items-center">
              {movesIcon[userMove]}
              <span className="text-lg sm:text-xl mt-2 text-gray-300">You</span>
            </div>
            <div className="text-2xl sm:text-3xl font-semibold text-center">
              {result}
            </div>
            <div className="text-5xl flex flex-col items-center">
              {movesIcon[computerMove]}
              <span className="text-lg sm:text-xl mt-2 text-gray-300">Computer</span>
            </div>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {moves.map((move) => (
            <button
              key={move}
              className="text-4xl sm:text-5xl bg-gradient-to-bl from-violet-500 to-fuchsia-500 rounded-3xl px-6 py-4 shadow-lg hover:scale-110 transition-transform"
              onClick={() => handelClick(move)}
            >
              {movesIcon[move]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;