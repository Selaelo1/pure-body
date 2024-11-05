/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { motion } from "framer-motion";
import { DollarSign, TrendingUp, CreditCard, Calendar } from "lucide-react";

const Earnings = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Earnings</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={DollarSign}
          title="Total Earnings"
          value="$3,450"
          change="+12% vs last month"
          color="text-green-600"
        />
        <StatCard
          icon={Calendar}
          title="Sessions"
          value="28"
          change="This month"
          color="text-blue-600"
        />
        <StatCard
          icon={TrendingUp}
          title="Avg. Session Rate"
          value="$85"
          change="+$5 vs last month"
          color="text-purple-600"
        />
        <StatCard
          icon={CreditCard}
          title="Pending Payments"
          value="$420"
          change="3 clients"
          color="text-orange-600"
        />
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        <div className="space-y-4">
          {transactions.map((transaction, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={transaction.clientImage}
                  alt={transaction.clientName}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">{transaction.clientName}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600">
                  +${transaction.amount}
                </p>
                <p className="text-sm text-gray-500">{transaction.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  icon: React.FC<any>;
  title: string;
  value: string;
  change: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  title,
  value,
  change,
  color,
}) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center justify-between">
      <Icon className={`h-8 w-8 ${color}`} />
      <span className="text-sm text-gray-500">{change}</span>
    </div>
    <h3 className="text-2xl font-bold mt-4">{value}</h3>
    <p className="text-gray-600">{title}</p>
  </div>
);

const transactions = [
  {
    clientName: "Emma Watson",
    clientImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    amount: "85",
    date: "March 20, 2024",
    type: "1:1 Training Session",
  },
  {
    clientName: "John Smith",
    clientImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    amount: "170",
    date: "March 19, 2024",
    type: "Monthly Package",
  },
];

export default Earnings;
