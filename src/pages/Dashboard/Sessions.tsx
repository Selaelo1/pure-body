import { Calendar, Clock, X } from "lucide-react";
import { useBookingStore } from "../../store/bookingStore";
import { format } from "date-fns";
import { motion } from "framer-motion";

const Sessions = () => {
  const { sessions, cancelSession } = useBookingStore();
  const upcomingSessions = sessions.filter(
    (session) => session.status === "upcoming"
  );
  const pastSessions = sessions.filter(
    (session) => session.status !== "upcoming"
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">My Training Sessions</h1>

      {upcomingSessions.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold mb-4">Upcoming Sessions</h2>
          <div className="space-y-4">
            {upcomingSessions.map((session) => (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Session with {session.trainerName}
                    </h3>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2" />
                        {format(new Date(session.date), "MMMM d, yyyy")}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-2" />
                        {session.time}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => cancelSession(session.id)}
                    className="text-red-600 hover:text-red-700 p-2"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {pastSessions.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold mb-4">Past Sessions</h2>
          <div className="space-y-4">
            {pastSessions.map((session) => (
              <div
                key={session.id}
                className="bg-white rounded-lg shadow-md p-6 opacity-75"
              >
                <h3 className="font-semibold text-lg mb-2">
                  Session with {session.trainerName}
                </h3>
                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    {format(new Date(session.date), "MMMM d, yyyy")}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    {session.time}
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      session.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {session.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {sessions.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <p className="text-gray-600">No training sessions booked yet.</p>
        </div>
      )}
    </div>
  );
};

export default Sessions;
