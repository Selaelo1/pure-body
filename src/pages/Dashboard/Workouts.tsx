import React from "react";
import { Dumbbell, Footprints, GrabIcon, Bird } from "lucide-react";

const Workouts = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Workouts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workoutTypes.map((workout) => (
          <div
            key={workout.title}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-purple-100 flex items-center justify-center">
              <workout.icon className="h-16 w-16 text-purple-600" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{workout.title}</h3>
              <p className="text-gray-600 mb-4">{workout.description}</p>
              <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Start Workout
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const workoutTypes = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description:
      "Build muscle and strength with our comprehensive weight training programs.",
  },
  {
    icon: Footprints,
    title: "Cardio",
    description:
      "Improve your endurance with running, cycling, and HIIT workouts.",
  },
  {
    icon: GrabIcon,
    title: "Boxing",
    description: "Learn boxing techniques and get a full-body workout.",
  },
  {
    icon: Bird,
    title: "Flexibility",
    description:
      "Enhance your flexibility and mobility with yoga and stretching routines.",
  },
];

export default Workouts;
