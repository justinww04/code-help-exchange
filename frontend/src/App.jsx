import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";

function App() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/problems")
      .then((res) => res.json())
      .then((data) => setProblems(data))
      .catch((err) => console.error("API fetch error:", err));
  }, []);

  const swiped = (direction, problem) => {
    console.log(`Swiped ${direction} on: ${problem.title}`);
    if (direction === "right") {
      alert(`You want to help with: ${problem.title}`);
    }
  };

  const outOfFrame = (title) => {
    console.log(title + " left the screen");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Code Help Exchange</h1>

      <div className="relative w-full max-w-md h-[500px]">
        {problems.map((problem) => (
          <TinderCard
            key={problem.id}
            className="absolute w-full"
            onSwipe={(dir) => swiped(dir, problem)}
            onCardLeftScreen={() => outOfFrame(problem.title)}
            preventSwipe={["up", "down"]}
          >
            <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-center items-center h-[500px] border">
              <h2 className="text-xl font-semibold">{problem.title}</h2>
              <p className="text-gray-700 mt-4">{problem.description}</p>
              <p className="mt-6 text-sm text-gray-400">
                Swipe left to skip, right to help
              </p>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default App;