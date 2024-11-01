/* eslint-disable @typescript-eslint/no-explicit-any */
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
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
import Setting from "./Settings";

const Dashboard = () => {
  const { user } = useAuthStore();
  const location = useLocation();

  const isActiveRoute = (path: string) => {
    const currentPath = location.pathname.replace("/dashboard", "");
    return currentPath === path || (currentPath === "" && path === "");
  };

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
            <NavItem
              to=""
              icon={Activity}
              text="Overview"
              isActive={isActiveRoute("")}
            />
            <NavItem
              to="workouts"
              icon={Users}
              text="Workouts"
              isActive={isActiveRoute("/workouts")}
            />
            <NavItem
              to="challenges"
              icon={Trophy}
              text="Challenges"
              isActive={isActiveRoute("/challenges")}
            />
            <NavItem
              to="nutrition"
              icon={Utensils}
              text="Nutrition"
              isActive={isActiveRoute("/nutrition")}
            />
            <NavItem
              to="mental-wellness"
              icon={Brain}
              text="Mental Wellness"
              isActive={isActiveRoute("/mental-wellness")}
            />
            <NavItem
              to="device-sync"
              icon={Watch}
              text="Device Sync"
              isActive={isActiveRoute("/device-sync")}
            />
            <NavItem
              to="settings"
              icon={Settings}
              text="Setting"
              isActive={isActiveRoute("/settings")}
            />
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
          <Route path="settings" element={<Setting />} />
        </Routes>
      </main>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.FC<any>;
  text: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  to,
  icon: Icon,
  text,
  isActive,
}) => (
  <Link
    to={to}
    className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
      isActive
        ? "bg-purple-50 text-purple-600"
        : "text-gray-600 hover:bg-purple-50 hover:text-purple-600"
    }`}
  >
    <Icon className="h-5 w-5" />
    <span>{text}</span>
  </Link>
);

export default Dashboard;
