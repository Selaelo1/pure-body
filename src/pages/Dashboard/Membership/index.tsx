import React from 'react';
import { Check, ChefHat, Dumbbell, Users, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const MembershipPlans = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Membership Plans</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white rounded-lg shadow-md overflow-hidden ${
              plan.popular ? 'ring-2 ring-purple-600' : ''
            }`}
          >
            {plan.popular && (
              <div className="bg-purple-600 text-white text-center py-1 text-sm">
                Most Popular
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold">R{plan.price}</span>
                <span className="text-gray-600 ml-1">/month</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Choose Plan
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const plans = [
  {
    name: 'Basic',
    price: '499',
    description: 'Perfect for getting started with your fitness journey',
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
    description: 'Our most popular plan for serious fitness enthusiasts',
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
    description: 'The ultimate fitness experience with premium perks',
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

export default MembershipPlans;