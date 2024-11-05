import React from "react";
import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

const Schedule = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Schedule</h1>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          Add Session
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-6">
          {scheduleData.map((day, dayIndex) => (
            <motion.div
              key={day.date}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: dayIndex * 0.1 }}
            >
              <h2 className="text-lg font-semibold mb-4">{day.date}</h2>
              <div className="space-y-4">
                {day.sessions.map((session, sessionIndex) => (
                  <div
                    key={sessionIndex}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={session.clientImage}
                        alt={session.clientName}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-semibold">{session.clientName}</p>
                        <p className="text-sm text-gray-500">{session.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{session.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{session.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const scheduleData = [
  {
    date: "Today - March 20, 2024",
    sessions: [
      {
        clientName: "Emma Watson",
        clientImage:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        type: "Strength Training",
        time: "10:00 AM",
        location: "Main Gym",
      },
      {
        clientName: "John Smith",
        clientImage:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        type: "HIIT",
        time: "2:30 PM",
        location: "Training Room 2",
      },
    ],
  },
  {
    date: "Tomorrow - March 21, 2024",
    sessions: [
      {
        clientName: "Sarah Johnson",
        clientImage:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        type: "Yoga",
        time: "9:00 AM",
        location: "Yoga Studio",
      },
    ],
  },
];

export default Schedule;
