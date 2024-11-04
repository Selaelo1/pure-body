import { Link, useLocation } from "react-router-dom";
import { Dumbbell, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const location = useLocation();

  // Hide footer if user is on dashboard routes
  if (location.pathname.startsWith("/dashboard")) {
    return null;
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Rest of the footer content remains the same */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Dumbbell className="h-8 w-8 text-purple-500" />
              <span className="ml-2 text-xl font-bold">Pure Body</span>
            </div>
            <p className="text-gray-400">
              Transform your life through fitness, nutrition, and mental
              wellness.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/features"
                  className="text-gray-400 hover:text-purple-500"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/trainers"
                  className="text-gray-400 hover:text-purple-500"
                >
                  Find Trainers
                </Link>
              </li>
              <li>
                <Link
                  to="/challenges"
                  className="text-gray-400 hover:text-purple-500"
                >
                  Challenges
                </Link>
              </li>
              <li>
                <Link
                  to="/nutrition"
                  className="text-gray-400 hover:text-purple-500"
                >
                  Nutrition
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/help"
                  className="text-gray-400 hover:text-purple-500"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-purple-500"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-purple-500"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-purple-500"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for tips and updates.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500"
              />
              <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Pure Body. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
