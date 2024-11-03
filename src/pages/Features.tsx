import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  Watch,
  Users,
  Trophy,
  Utensils,
  Smartphone,
  Heart,
  Target,
  MessageCircle,
  Calendar,
  BarChart3,
  Video,
  BookOpen,
  ShieldCheck,
} from "lucide-react";

const Features = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for Your Fitness Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pure Body provides all the tools and support you need to achieve
            your fitness goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <feature.icon className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Start Your Fitness Journey Today
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
            onClick={() => (window.location.href = "/register")}
          >
            Join Pure Body Now
          </motion.button>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    icon: Users,
    title: "Expert Trainers",
    description:
      "Connect with certified personal trainers who create customized workout plans and provide real-time guidance.",
  },
  {
    icon: Watch,
    title: "Device Integration",
    description:
      "Seamlessly sync with your smartwatch and fitness devices to track workouts, heart rate, and daily activity.",
  },
  {
    icon: Trophy,
    title: "Fitness Challenges",
    description:
      "Join community challenges like 75 Hard or create custom goals to stay motivated and accountable.",
  },
  {
    icon: Utensils,
    title: "Nutrition Planning",
    description:
      "Access healthy recipes, meal plans, and nutrition tracking tools tailored to your fitness goals.",
  },
  {
    icon: Activity,
    title: "Diverse Workouts",
    description:
      "Choose from various workout styles including calisthenics, bodybuilding, boxing, and running programs.",
  },
  {
    icon: Brain,
    title: "Mental Wellness",
    description:
      "Access resources for mental health, meditation guides, and connect with wellness professionals.",
  },
  {
    icon: Smartphone,
    title: "Mobile Access",
    description:
      "Track your progress and access workouts anywhere with our mobile-friendly platform.",
  },
  {
    icon: Heart,
    title: "Health Monitoring",
    description:
      "Track vital health metrics and receive insights to optimize your fitness journey.",
  },
  {
    icon: Target,
    title: "Goal Setting",
    description:
      "Set personalized fitness goals and track your progress with detailed analytics and insights.",
  },
  {
    icon: MessageCircle,
    title: "Community Support",
    description:
      "Connect with like-minded individuals, share experiences, and get motivation from our supportive community.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "Easily book sessions with trainers and manage your workout schedule with our intuitive calendar.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description:
      "Visualize your fitness journey with detailed progress charts and performance metrics.",
  },
  {
    icon: Video,
    title: "Virtual Sessions",
    description:
      "Access live and on-demand virtual training sessions from anywhere in the world.",
  },
  {
    icon: BookOpen,
    title: "Educational Resources",
    description:
      "Access a library of fitness education content, technique guides, and wellness articles.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Platform",
    description:
      "Your data is protected with enterprise-grade security and privacy measures.",
  },
];

export default Features;
