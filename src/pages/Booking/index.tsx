import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useBookingStore } from '../../store/bookingStore';
import { trainers } from '../Trainers/trainersData';
import { format, addDays, isBefore, startOfToday } from 'date-fns';

const BookingPage = () => {
  const { trainerId } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const { hasUsedFreeSession, addSession } = useBookingStore();

  const trainer = trainers.find((t) => t.id === trainerId);
  if (!trainer) return <div>Trainer not found</div>;

  const availableDates = Array.from({ length: 14 }, (_, i) => {
    const date = addDays(new Date(), i);
    return format(date, 'yyyy-MM-dd');
  });

  const availableTimes = [
    '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) return;

    const session = {
      id: Math.random().toString(36).substr(2, 9),
      trainerId: trainer.id,
      trainerName: trainer.name,
      date: selectedDate,
      time: selectedTime,
      status: 'upcoming' as const,
    };

    addSession(session);
    navigate('/dashboard/sessions');
  };

  const isDateValid = (date: string) => {
    return !isBefore(new Date(date), startOfToday());
  };

  return (
    <div className="pt-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Book a Session with {trainer.name}
        </h1>

        {hasUsedFreeSession && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6"
          >
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-purple-600 mt-0.5 mr-3" />
              <div>
                <h3 className="text-purple-800 font-semibold">
                  Free Trial Already Used
                </h3>
                <p className="text-purple-600">
                  This session will be charged at ${trainer.hourlyRate}/hour
                </p>
              </div>
            </div>
          </motion.div>
        )}

        <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Date
            </label>
            <div className="grid grid-cols-4 gap-2">
              {availableDates.map((date) => (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`p-3 rounded-lg border text-sm ${
                    selectedDate === date
                      ? 'bg-purple-600 text-white border-purple-600'
                      : 'border-gray-300 hover:border-purple-600'
                  } ${!isDateValid(date) ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={!isDateValid(date)}
                >
                  {format(new Date(date), 'MMM d')}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Time
            </label>
            <div className="grid grid-cols-4 gap-2">
              {availableTimes.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 rounded-lg border text-sm ${
                    selectedTime === time
                      ? 'bg-purple-600 text-white border-purple-600'
                      : 'border-gray-300 hover:border-purple-600'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t pt-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">
                  {selectedDate
                    ? format(new Date(selectedDate), 'MMMM d, yyyy')
                    : 'Select a date'}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">
                  {selectedTime || 'Select a time'}
                </span>
              </div>
            </div>

            <button
              onClick={handleBooking}
              disabled={!selectedDate || !selectedTime}
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {hasUsedFreeSession
                ? `Book Session ($${trainer.hourlyRate})`
                : 'Book Free Trial Session'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;