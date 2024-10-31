import { create } from "zustand";
import { AuthState, RegisterData, User } from "../types/user";

// Simulated user data - replace with actual API calls
const mockUser: User = {
  id: "1",
  email: "john@example.com",
  name: "John Doe",
  role: "client",
  profileImage: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  login: async (email: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set({ user: mockUser, isAuthenticated: true });
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
  },

  register: async (data: RegisterData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newUser: User = {
      id: Math.random().toString(),
      email: data.email,
      name: data.name,
      role: data.role,
    };
    set({ user: newUser, isAuthenticated: true });
  },
}));
