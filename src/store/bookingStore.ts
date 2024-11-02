import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface BookingSession {
  id: string;
  trainerId: string;
  trainerName: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

interface BookingState {
  sessions: BookingSession[];
  hasUsedFreeSession: boolean;
  addSession: (session: BookingSession) => void;
  cancelSession: (sessionId: string) => void;
  setHasUsedFreeSession: (value: boolean) => void;
}

export const useBookingStore = create<BookingState>()(
  persist(
    (set) => ({
      sessions: [],
      hasUsedFreeSession: false,
      addSession: (session) =>
        set((state) => ({
          sessions: [...state.sessions, session],
          hasUsedFreeSession: true,
        })),
      cancelSession: (sessionId) =>
        set((state) => ({
          sessions: state.sessions.map((session) =>
            session.id === sessionId
              ? { ...session, status: 'cancelled' }
              : session
          ),
        })),
      setHasUsedFreeSession: (value) =>
        set(() => ({ hasUsedFreeSession: value })),
    }),
    {
      name: 'booking-storage',
    }
  )
);