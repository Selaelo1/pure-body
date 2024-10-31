import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useAuthStore } from "../../stores/authStore";
import {
  Activity,
  Brain,
  Watch,
  Users,
  Trophy,
  Utensils,
  Settings,
} from "lucide-react";

// Import dashboard components
import Overview from "./Overview";
import Workouts from "./Workouts";
import Challenges from "./Challenges";
import Nutrition from "./Nutrition";
import MentalWellness from "./MentalWellness";
import DeviceSync from "./DeviceSync";

const Dashboard = () => {
  const { user } = useAuthStore();

  return (
    <div className="flex min-h-screen pt-16">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg fixed h-full">
        <div className="p-4">
          <div className="flex items-center space-x-3 mb-6">
            <img
              src={user?.profileImage || "https://via.placeholder.com/40"}
              alt={user?.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">{user?.name}</p>
              <p className="text-sm text-gray-500 capitalize">{user?.role}</p>
            </div>
          </div>
          <nav className="space-y-2">
            <NavItem to="" icon={Activity} text="Overview" />
            <NavItem to="workouts" icon={Users} text="Workouts" />
            <NavItem to="challenges" icon={Trophy} text="Challenges" />
            <NavItem to="nutrition" icon={Utensils} text="Nutrition" />
            <NavItem to="mental-wellness" icon={Brain} text="Mental Wellness" />
            <NavItem to="device-sync" icon={Watch} text="Device Sync" />
            <NavItem to="settings" icon={Settings} text="Settings" />
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="workouts" element={<Workouts />} />
          <Route path="challenges" element={<Challenges />} />
          <Route path="nutrition" element={<Nutrition />} />
          <Route path="mental-wellness" element={<MentalWellness />} />
          <Route path="device-sync" element={<DeviceSync />} />
        </Routes>
      </main>
    </div>
  );
};

interface NavItemProps {
  to: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.FC<any>;
  text: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon: Icon, text }) => (
  <Link
    to={to}
    className="flex items-center space-x-3 px-4 py-2 text-gray-600 rounded-lg hover:bg-purple-50 hover:text-purple-600"
  >
    <Icon className="h-5 w-5" />
    <span>{text}</span>
  </Link>
);

export default Dashboard;
