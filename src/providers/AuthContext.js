// The Context object lives in its own file (keeps AuthProvider.jsx lint-clean)
import { createContext } from "react";

export const AuthContext = createContext(null);
