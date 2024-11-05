import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Calendar, Activity, BarChart2 } from "lucide-react";

const MyClients = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">My Clients</h1>

      <div className="grid grid-cols-1 gap-6">
        {clients.map((client, index) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-lg">{client.name}</h3>
                  <p className="text-gray-600">{client.plan}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg">
                  <MessageCircle className="h-5 w-5" />
                </button>
                <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg">
                  <Calendar className="h-5 w-5" />
                </button>
                <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg">
                  <BarChart2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">Last Session</span>
                </div>
                <p className="mt-1 font-medium">{client.lastSession}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-600">Next Session</span>
                </div>
                <p className="mt-1 font-medium">{client.nextSession}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-purple-500" />
                  <span className="text-gray-600">Progress</span>
                </div>
                <p className="mt-1 font-medium">{client.progress}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const clients = [
  {
    id: 1,
    name: "Emma Watson",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    plan: "Premium Plan - 3x/week",
    lastSession: "March 18, 2024",
    nextSession: "March 21, 2024",
    progress: "On Track",
  },
  {
    id: 2,
    name: "John Smith",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    plan: "Basic Plan - 2x/week",
    lastSession: "March 19, 2024",
    nextSession: "March 22, 2024",
    progress: "Exceeding Goals",
  },
];

export default MyClients;
