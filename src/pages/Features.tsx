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
];

export default Features;
