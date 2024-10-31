import React from "react";
import { Activity, Trophy, TrendingUp, Heart } from "lucide-react";

const Overview = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={Activity}
          title="Active Minutes"
          value="145"
          change="+12%"
          color="text-blue-600"
        />
        <StatCard
          icon={Trophy}
          title="Challenges"
          value="3"
          change="Active"
          color="text-yellow-600"
        />
        <StatCard
          icon={TrendingUp}
          title="Workouts"
          value="12"
          change="This Week"
          color="text-green-600"
        />
        <StatCard
          icon={Heart}
          title="Avg. Heart Rate"
          value="72"
          change="bpm"
          color="text-red-600"
        />
      </div>

      {/* Recent Activity */}
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 border-b last:border-0"
            >
              <div className="flex items-center space-x-3">
                <activity.icon className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">{activity.duration}</span>
            </div>
          ))}
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

const recentActivities = [
  {
    icon: Activity,
    title: "Morning Run",
    time: "Today at 7:30 AM",
    duration: "45 min",
  },
  {
    icon: Trophy,
    title: "Completed Challenge: 10K Steps",
    time: "Yesterday",
    duration: "Achievement",
  },
  {
    icon: Heart,
    title: "Cardio Workout",
    time: "Yesterday at 6:00 PM",
    duration: "30 min",
  },
];

export default Overview;
