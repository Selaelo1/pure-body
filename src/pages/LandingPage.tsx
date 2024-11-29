import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  Watch,
  Users,
  Trophy,
  Utensils,
  ArrowRight,
  Check,
} from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Your Life with Pure Body
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Connect with expert trainers, track your progress, and join a
              community of fitness enthusiasts on your journey to better health.
            </p>
            <button 
              onClick={() => navigate("/register")}
              className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors flex items-center"
            >
              Get Started <ArrowRight className="ml-2" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Everything You Need
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600">
              Find the perfect membership plan for your fitness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                  plan.popular ? 'ring-2 ring-purple-600' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-purple-600 text-white text-center py-2">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold">R{plan.price}</span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate("/register")}
                    className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Start Your Fitness Journey?
          </h2>
          <button 
            onClick={() => navigate("/register")}
            className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Join Pure Body Today
          </button>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: Users,
    title: "Expert Trainers",
    description:
      "Connect with certified personal trainers who will guide you through your fitness journey.",
  },
  {
    icon: Watch,
    title: "Smart Tracking",
    description:
      "Sync with your smartwatch to monitor your workouts, heart rate, and daily activity.",
  },
  {
    icon: Trophy,
    title: "Challenges",
    description:
      "Join community challenges like 75 Hard or create custom goals to push your limits.",
  },
  {
    icon: Utensils,
    title: "Nutrition Guide",
    description:
      "Access healthy recipes and meal plans tailored to your fitness goals.",
  },
  {
    icon: Activity,
    title: "Diverse Workouts",
    description:
      "Choose from various workout styles including calisthenics, bodybuilding, and boxing.",
  },
  {
    icon: Brain,
    title: "Mental Wellness",
    description:
      "Focus on holistic health with dedicated mental wellness resources and support.",
  },
];

const plans = [
  {
    name: 'Basic',
    price: '499',
    description: 'Perfect for getting started',
    features: [
      'Access to gym facilities',
      'Basic fitness assessment',
      'Locker room access',
      'Access during standard hours (6AM-8PM)',
      'Group classes (2 per week)',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    price: '899',
    description: 'Most popular choice',
    features: [
      'Unlimited gym access 24/7',
      'Advanced fitness assessment',
      'Personal training session (2 per month)',
      'All group classes included',
      'Sauna & steam room access',
      'Guest passes (2 per month)',
      'Mobile app premium features',
    ],
    popular: true,
  },
  {
    name: 'Elite',
    price: '1499',
    description: 'The ultimate experience',
    features: [
      'All Premium features included',
      'Weekly prepared meals (14 meals)',
      'Customized nutrition plan',
      'Personal training session (4 per month)',
      'Recovery therapy sessions',
      'Exclusive members lounge access',
      'Priority class bookings',
      'Quarterly body composition analysis',
      'Sports massage (1 per month)',
    ],
    popular: false,
  },
];

export default LandingPage;