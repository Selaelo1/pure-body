import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Dumbbell } from "lucide-react";
import { useAuthStore } from "../store/authStore";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout, user } = useAuthStore();
  const navigate = useNavigate();
  const isTrainer = user?.role === 'trainer';

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Dumbbell className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">
                Pure Body
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/features"
              className="text-gray-600 hover:text-purple-600"
            >
              Features
            </Link>
            {!isTrainer && (
              <Link
                to="/trainers"
                className="text-gray-600 hover:text-purple-600"
              >
                Find Trainers
              </Link>
            )}
            <Link
              to="/challenges"
              className="text-gray-600 hover:text-purple-600"
            >
              Challenges
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-purple-600 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <Link
              to="/features"
              className="block px-3 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg"
            >
              Features
            </Link>
            {!isTrainer && (
              <Link
                to="/trainers"
                className="block px-3 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg"
              >
                Find Trainers
              </Link>
            )}
            <Link
              to="/challenges"
              className="block px-3 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg"
            >
              Challenges
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="block px-3 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 text-purple-600 hover:bg-purple-50 rounded-lg font-medium"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-2 text-purple-600 hover:bg-purple-50 rounded-lg font-medium"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;