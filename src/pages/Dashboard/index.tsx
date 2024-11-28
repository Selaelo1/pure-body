import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthStore } from "../../store/authStore";
import {
  Activity,
  Brain,
  Watch,
  Users,
  Trophy,
  Utensils,
  Settings,
  Calendar,
  DollarSign,
  MessageCircle,
  Menu,
  Lightbulb,
  Search,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Import components
import Sidebar, { NavItem } from "../../components/dashboard/Sidebar";
import Overview from "./Overview";
import TrainerDashboard from "./TrainerDashboard";
import Workouts from "./Workouts";
import Challenges from "./Challenges";
import Nutrition from "./Nutrition";
import MentalWellness from "./MentalWellness";
import DeviceSync from "./DeviceSync";
import Setting from "./Settings";
import Sessions from "./Sessions";
import MyClients from "./trainer/MyClients";
import Schedule from "./trainer/Schedule";
import Earnings from "./trainer/Earnings";
import Messages from "./trainer/Messages";
import Features from "../Features";
import TrainersPage from "../Trainers";

const Dashboard = () => {
  const { user, logout } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isActiveRoute = (path: string) => {
    const currentPath = location.pathname.replace("/dashboard", "");
    return currentPath === path || (currentPath === "" && path === "");
  };

  const isTrainer = user?.role === "trainer";

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Close sidebar when route changes
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  const trainerNavItems: NavItem[] = [
    { to: "", icon: Activity, text: "Trainer Dashboard" },
    { to: "clients", icon: Users, text: "My Clients" },
    { to: "schedule", icon: Calendar, text: "Schedule" },
    { to: "earnings", icon: DollarSign, text: "Earnings" },
    { to: "messages", icon: MessageCircle, text: "Messages" },
    { to: "features", icon: Lightbulb, text: "Features" },
    { to: "settings", icon: Settings, text: "Settings" },
  ];

  const clientNavItems: NavItem[] = [
    { to: "", icon: Activity, text: "Overview" },
    { to: "workouts", icon: Users, text: "Workouts" },
    { to: "sessions", icon: Calendar, text: "My Sessions" },
    { to: "challenges", icon: Trophy, text: "Challenges" },
    { to: "nutrition", icon: Utensils, text: "Nutrition" },
    { to: "mental-wellness", icon: Brain, text: "Mental Wellness" },
    { to: "device-sync", icon: Watch, text: "Device Sync" },
    { to: "features", icon: Lightbulb, text: "Features" },
    { to: "trainers", icon: Search, text: "Find Trainers" },
    { to: "settings", icon: Settings, text: "Settings" },
  ];

  const navItems = [...(isTrainer ? trainerNavItems : clientNavItems)];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-50 lg:hidden flex items-center px-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg"
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6 text-gray-600" />
        </button>
        <span className="ml-4 font-semibold text-gray-900">{user?.name}</span>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-[280px] bg-white shadow-lg transform transition-transform duration-200 ease-in-out z-40 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <Sidebar
          user={user}
          isTrainer={isTrainer}
          isActiveRoute={isActiveRoute}
          navItems={navItems}
          onLogout={handleLogout}
        />
      </aside>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 lg:ml-[280px] min-h-screen">
        <div className="p-4 pt-20 lg:pt-4">
          <Routes>
            <Route
              path="/"
              element={isTrainer ? <TrainerDashboard /> : <Overview />}
            />
            <Route path="workouts" element={<Workouts />} />
            <Route path="sessions" element={<Sessions />} />
            <Route path="challenges" element={<Challenges />} />
            <Route path="nutrition" element={<Nutrition />} />
            <Route path="mental-wellness" element={<MentalWellness />} />
            <Route path="device-sync" element={<DeviceSync />} />
            <Route path="settings" element={<Setting />} />
            <Route path="features" element={<Features />} />
            <Route path="trainers" element={<TrainersPage />} />
            {/* Trainer Routes */}
            <Route path="clients" element={<MyClients />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="earnings" element={<Earnings />} />
            <Route path="messages" element={<Messages />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
