import React from "react";
import { Star, MessageCircle } from "lucide-react";
import type { Trainer } from "./types";

interface TrainerCardProps {
  trainer: Trainer;
  onViewProfile: () => void;
}

const TrainerCard: React.FC<TrainerCardProps> = ({
  trainer,
  onViewProfile,
}) => {
  const averageRating =
    trainer.reviews.reduce((acc, review) => acc + review.rating, 0) /
    trainer.reviews.length;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <h3 className="text-xl font-semibold text-white">{trainer.name}</h3>
          <p className="text-white/90">{trainer.specialties.join(" • ")}</p>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-700">
              {averageRating.toFixed(1)} ({trainer.reviews.length} reviews)
            </span>
          </div>
          <span className="text-purple-600 font-semibold">
            ${trainer.hourlyRate}/hr
          </span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{trainer.bio}</p>

        <div className="flex space-x-3">
          <button
            onClick={onViewProfile}
            className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            View Profile
          </button>
          <button
            onClick={() =>
              (window.location.href = `/dashboard/messages/${trainer.id}`)
            }
            className="flex items-center justify-center px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
