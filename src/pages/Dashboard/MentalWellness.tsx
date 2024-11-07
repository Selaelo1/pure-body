import React from "react";
import { Brain, Heart, Sun, Moon } from "lucide-react";

const MentalWellness = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Mental Wellness</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <div
            key={resource.title}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <resource.icon className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                {resource.actionText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const resources = [
  {
    icon: Brain,
    title: "Guided Meditation",
    description:
      "Find peace and clarity with our collection of guided meditation sessions.",
    actionText: "Start Session",
  },
  {
    icon: Heart,
    title: "Stress Management",
    description: "Learn effective techniques to manage stress and anxiety.",
    actionText: "Learn More",
  },
  {
    icon: Sun,
    title: "Morning Routines",
    description: "Develop healthy morning habits for better mental well-being.",
    actionText: "View Routines",
  },
  {
    icon: Moon,
    title: "Sleep Better",
    description:
      "Improve your sleep quality with relaxation techniques and bedtime routines.",
    actionText: "Get Started",
  },
];

export default MentalWellness;
