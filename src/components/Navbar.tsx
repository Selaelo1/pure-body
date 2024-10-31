import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Dumbbell } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <Link
              to="/trainers"
              className="text-gray-600 hover:text-purple-600"
            >
              Find Trainers
            </Link>
            <Link
              to="/challenges"
              className="text-gray-600 hover:text-purple-600"
            >
              Challenges
            </Link>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-purple-600"
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/features"
              className="block px-3 py-2 text-gray-600 hover:text-purple-600"
            >
              Features
            </Link>
            <Link
              to="/trainers"
              className="block px-3 py-2 text-gray-600 hover:text-purple-600"
            >
              Find Trainers
            </Link>
            <Link
              to="/challenges"
              className="block px-3 py-2 text-gray-600 hover:text-purple-600"
            >
              Challenges
            </Link>
            <button className="w-full text-left px-3 py-2 text-purple-600 font-medium">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
