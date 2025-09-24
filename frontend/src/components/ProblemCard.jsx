import React from "react";

export default function ProblemCard({ problem }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border">
      <h2 className="text-xl font-semibold">{problem.title}</h2>
      <p className="text-gray-700 mt-2">{problem.description}</p>
    </div>
  );
}