import { create } from 'zustand';
import { AuthState, User, RegisterData } from '../types/user';

const mockTrainerUser: User = {
  id: '2',
  email: 'trainer@example.com',
  name: 'Sarah Johnson',
  role: 'trainer',
  profileImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80'
};

const mockClientUser: User = {
  id: '1',
  email: 'client@example.com',
  name: 'John Doe',
  role: 'client',
  profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  
  login: async (email: string, password: string) => {
    try {
      // Mock API call - simulate different users based on email
      const mockUser = email === 'trainer@example.com' ? mockTrainerUser : mockClientUser;
      set({ user: mockUser, isAuthenticated: true });
    } catch (error) {
      console.error('Login failed:', error);
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
        id: Math.random().toString(),
        email: data.email,
        name: data.name,
        role: data.role,
        profileImage: data.role === 'trainer' 
          ? 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80'
          : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      };
      
      set({ user: mockUser, isAuthenticated: true });
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  }
}));