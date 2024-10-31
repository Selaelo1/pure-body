import React from "react";
import { Trophy, Timer, Target } from "lucide-react";

const Challenges = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Challenges</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge) => (
          <div
            key={challenge.title}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Trophy className="h-8 w-8 text-yellow-500" />
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
                  {challenge.duration}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
              <p className="text-gray-600 mb-4">{challenge.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span className="flex items-center">
                  <Timer className="h-4 w-4 mr-1" />
                  {challenge.participants} participants
                </span>
                <span className="flex items-center">
                  <Target className="h-4 w-4 mr-1" />
                  {challenge.completion} completion rate
                </span>
              </div>
              <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Join Challenge
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const challenges = [
  {
    title: "75 Hard Challenge",
    description: "Complete 75 days of strict fitness and mental discipline.",
    duration: "75 days",
    participants: "1.2k",
    completion: "68%",
  },
  {
    title: "50K in 30 Days",
    description: "Run or walk 50 kilometers within 30 days.",
    duration: "30 days",
    participants: "856",
    completion: "72%",
  },
  {
    title: "100 Push-ups Challenge",
    description: "Build up to doing 100 push-ups in one session.",
    duration: "30 days",
    participants: "2.1k",
    completion: "45%",
  },
];

export default Challenges;
