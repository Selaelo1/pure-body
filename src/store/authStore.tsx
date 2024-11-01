import { create } from "zustand";
import { AuthState, User, RegisterData } from "../types/user";

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login: async (email: string, password: string) => {
    try {
      // Mock API call
      const mockUser: User = {
        id: "1",
        email,
        name: "John Doe",
        role: "client",
        profileImage:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      };

      set({ user: mockUser, isAuthenticated: true });
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
  },

  register: async (data: RegisterData) => {
    try {
      // Mock API call
      const mockUser: User = {
        id: "1",
        email: data.email,
        name: data.name,
        role: data.role,
      };

      set({ user: mockUser, isAuthenticated: true });
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  },
}));
