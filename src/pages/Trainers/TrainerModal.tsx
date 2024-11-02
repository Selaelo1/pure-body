import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  X,
  Star,
  MessageCircle,
  Calendar,
  Award,
  Users,
  Clock,
  MapPin,
} from "lucide-react";
import type { Trainer } from "./types";

interface TrainerModalProps {
  trainer: Trainer;
  onClose: () => void;
}

const TrainerModal: React.FC<TrainerModalProps> = ({ trainer, onClose }) => {
  const [activeTab, setActiveTab] = useState<"about" | "reviews">("about");
  const navigate = useNavigate();

  const handleBooking = () => {
    onClose();
    navigate(`/book/${trainer.id}`);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="relative">
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-full h-72 object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">{trainer.name}</h2>
                <p className="text-gray-600">
                  {trainer.specialties.join(" • ")}
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-purple-600">
                  ${trainer.hourlyRate}
                </p>
                <p className="text-gray-600">per hour</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-gray-600">Age: {trainer.age}</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-gray-600">{trainer.experience} exp.</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-gray-600">
                  {trainer.clientCount}+ clients
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-gray-600">{trainer.location}</span>
              </div>
            </div>

            <div className="flex space-x-4 border-b mb-6">
              <button
                className={`pb-2 px-1 ${
                  activeTab === "about"
                    ? "border-b-2 border-purple-600 text-purple-600"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab("about")}
              >
                About
              </button>
              <button
                className={`pb-2 px-1 ${
                  activeTab === "reviews"
                    ? "border-b-2 border-purple-600 text-purple-600"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews ({trainer.reviews.length})
              </button>
            </div>

            {activeTab === "about" ? (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">About Me</h3>
                  <p className="text-gray-600">{trainer.bio}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Certifications</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {trainer.certifications.map((cert, index) => (
                      <li key={index}>{cert}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Training Style</h3>
                  <p className="text-gray-600">{trainer.trainingStyle}</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {trainer.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="border-b last:border-b-0 pb-4 last:pb-0"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <img
                          src={review.userImage}
                          alt={review.userName}
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <p className="font-semibold">{review.userName}</p>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-gray-500 text-sm">
                        {review.date}
                      </span>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 flex space-x-4">
              <button
                onClick={() =>
                  (window.location.href = `/dashboard/messages/${trainer.id}`)
                }
                className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Contact Trainer
              </button>
              <button
                onClick={handleBooking}
                className="flex-1 border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors flex items-center justify-center"
              >
                <Clock className="h-5 w-5 mr-2" />
                Book Session
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TrainerModal;
