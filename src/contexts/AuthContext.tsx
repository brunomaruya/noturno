import { createContext, useContext, useEffect, useState } from "react";

//--- Types -------------------------------------------------------------------
export interface User {
  id: string;
  email: string;
  handle: string;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signin: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, handle: string) => Promise<void>;
  signout: () => Promise<void>;
}

//--- Context -------------------------------------------------------------------

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = "noturno.user";
const fakeDelay = () => new Promise((resolve) => setTimeout(resolve, 1000));

//--- Provider -------------------------------------------------------------------

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setUser(JSON.parse(saved) as User);
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    } finally {
      setLoading(false);
    }
  }, []);

  async function signin(email: string, password: string) {
    await fakeDelay();
    if (!password) throw new Error("Password is required");

    const fake: User = {
      id: crypto.randomUUID(),
      email,
      handle: email.split("@")[0],
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fake));
    setUser(fake);
  }

  async function signup(email: string, password: string, handle: string) {
    await fakeDelay();
    if (!email || !password || !handle)
      throw new Error("All fields are required");

    //todo
  }

  async function signout() {
    await fakeDelay();
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, signin, signup, signout }}>
      {children}
    </AuthContext.Provider>
  );
}

//--- Hook -------------------------------------------------------------------

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) throw new Error("useAuth must be used within an AuthProvider");

  return context;
}
