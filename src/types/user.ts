export type UserRole = "client" | "trainer" | "admin";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  profileImage?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (data: RegisterData) => Promise<void>;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
  role: UserRole;
}