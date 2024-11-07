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
  X,
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

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("sidebar");
      const menuButton = document.getElementById("menu-button");
      if (
        isSidebarOpen &&
        sidebar &&
        !sidebar.contains(event.target as Node) &&
        menuButton &&
        !menuButton.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  const trainerNavItems: NavItem[] = [
    { to: "", icon: Activity, text: "Trainer Dashboard" },
    { to: "clients", icon: Users, text: "My Clients" },
    { to: "schedule", icon: Calendar, text: "Schedule" },
    { to: "earnings", icon: DollarSign, text: "Earnings" },
    { to: "messages", icon: MessageCircle, text: "Messages" },
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
    { to: "settings", icon: Settings, text: "Settings" },
  ];

  const navItems = [...(isTrainer ? trainerNavItems : clientNavItems)];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <button
        id="menu-button"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg lg:hidden"
      >
        {isSidebarOpen ? (
          <X className="h-6 w-6 text-gray-600" />
        ) : (
          <Menu className="h-6 w-6 text-gray-600" />
        )}
      </button>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        id="sidebar"
        initial={false}
        animate={{ x: isSidebarOpen ? 0 : -280 }}
        transition={{ type: "tween" }}
        className={`fixed top-0 left-0 h-full w-[280px] bg-white shadow-lg z-40 lg:translate-x-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200 ease-in-out lg:static lg:transform-none`}
      >
        <Sidebar
          user={user}
          isTrainer={isTrainer}
          isActiveRoute={isActiveRoute}
          navItems={navItems}
          onLogout={handleLogout}
        />
      </motion.aside>

      {/* Main Content */}
      <main
        className={`lg:ml-[280px] min-h-screen transition-all duration-200`}
      >
        <div className="p-4 pt-16 lg:pt-4">
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
