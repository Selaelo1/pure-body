import React from "react";
import {
  Calendar,
  Users,
  DollarSign,
  Clock,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const TrainerDashboard = () => {
  const upcomingSessions = [
    {
      clientName: "Emma Watson",
      time: "10:00 AM",
      date: "2024-03-20",
      type: "Strength Training",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      clientName: "John Smith",
      time: "2:30 PM",
      date: "2024-03-20",
      type: "HIIT",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Trainer Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={Users}
          title="Active Clients"
          value="24"
          change="+2 this month"
          color="text-blue-600"
        />
        <StatCard
          icon={Calendar}
          title="Sessions Today"
          value="6"
          change="2 remaining"
          color="text-green-600"
        />
        <StatCard
          icon={DollarSign}
          title="Monthly Revenue"
          value="$3,450"
          change="+12% vs last month"
          color="text-purple-600"
        />
        <StatCard
          icon={Clock}
          title="Training Hours"
          value="86"
          change="this month"
          color="text-orange-600"
        />
      </div>

      {/* Upcoming Sessions */}
      <section className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Today's Sessions</h2>
          <button className="text-purple-600 hover:text-purple-700">
            View All
          </button>
        </div>
        <div className="space-y-4">
          {upcomingSessions.map((session, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={session.image}
                  alt={session.clientName}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">{session.clientName}</p>
                  <p className="text-sm text-gray-500">{session.type}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">{session.time}</p>
                <p className="text-sm text-gray-500">{session.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <ActionButton
              icon={Calendar}
              text="Schedule Session"
              onClick={() => {
                /* handle action */
              }}
            />
            <ActionButton
              icon={MessageCircle}
              text="Message Clients"
              onClick={() => {
                /* handle action */
              }}
            />
            <ActionButton
              icon={Users}
              text="Client Progress"
              onClick={() => {
                /* handle action */
              }}
            />
            <ActionButton
              icon={Clock}
              text="Availability"
              onClick={() => {
                /* handle action */
              }}
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Messages</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 py-2 border-b last:border-0"
              >
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <p className="text-gray-600 flex-1">New message from client</p>
                <span className="text-sm text-gray-500">2m ago</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

interface StatCardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.FC<any>;
  title: string;
  value: string;
  change: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  title,
  value,
  change,
  color,
}) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center justify-between">
      <Icon className={`h-8 w-8 ${color}`} />
      <span className="text-sm text-gray-500">{change}</span>
    </div>
    <h3 className="text-2xl font-bold mt-4">{value}</h3>
    <p className="text-gray-600">{title}</p>
  </div>
);

interface ActionButtonProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.FC<any>;
  text: string;
  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon: Icon,
  text,
  onClick,
}) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors"
  >
    <Icon className="h-6 w-6 text-purple-600 mb-2" />
    <span className="text-sm text-gray-700">{text}</span>
  </button>
);

export default TrainerDashboard;
