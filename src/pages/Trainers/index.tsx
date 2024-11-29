import React, { useState } from "react";
import TrainerCard from "./TrainerCard";
import TrainerModal from "./TrainerModal";
import { trainers } from "./trainersData";
import type { Trainer } from "./types";

const TrainersPage = () => {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);

  return (
    <div className="pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Find Your Perfect Trainer</h1>
        <p className="text-gray-600 mb-8">
          Connect with certified trainers specializing in various fitness disciplines
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((trainer) => (
            <TrainerCard
              key={trainer.id}
              trainer={trainer}
              onViewProfile={() => setSelectedTrainer(trainer)}
            />
          ))}
        </div>
      </div>

      {selectedTrainer && (
        <TrainerModal
          trainer={selectedTrainer}
          onClose={() => setSelectedTrainer(null)}
        />
      )}
    </div>
  );
};

export default TrainersPage;