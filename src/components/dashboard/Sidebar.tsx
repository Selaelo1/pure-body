import { Link } from "react-router-dom";
import { User } from "../../types/user";
import { LucideIcon, LogOut } from "lucide-react";

interface SidebarProps {
  user: User | null;
  isTrainer: boolean;
  isActiveRoute: (path: string) => boolean;
  navItems: NavItem[];
  onLogout: () => void;
}

export interface NavItem {
  to: string;
  icon: LucideIcon;
  text: string;
}

const Sidebar = ({ user, isActiveRoute, navItems, onLogout }: SidebarProps) => {
  return (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b">
        <div className="flex items-center space-x-3">
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
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1">
          {navItems.map((item) => (
            <NavItem
              key={item.to}
              to={`/dashboard/${item.to}`}
              icon={item.icon}
              text={item.text}
              isActive={isActiveRoute(item.to)}
            />
          ))}
        </div>
      </nav>

      <div className="p-4 border-t mt-auto">
        <button
          onClick={onLogout}
          className="flex items-center space-x-3 px-4 py-2 w-full rounded-lg text-red-600 hover:bg-red-50 transition-colors"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: LucideIcon;
  text: string;
  isActive: boolean;
}

const NavItem = ({ to, icon: Icon, text, isActive }: NavItemProps) => (
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

export default Sidebar;