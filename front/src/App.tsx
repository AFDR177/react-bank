import React, { createContext, useReducer, useContext } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
import WellcomePage from "./container/wellcomepage";
import SignupPage from "./container/signup";

import Page from "./page/page";
import Grid from "./page/grid";

//Типи для даних аутентифікації
type ContextType = {
  isAuthenticated: boolean;
  token: string | null;
  user: any;
};

type AuthAction =
  | {
      type: "LOGIN";
      payload: { token: string; user: ContextType };
    }
  | { type: "LOGOUT" };

//Створення контекста для даних аутентифікації
const AuthContext = createContext<ContextType | null>(null);
// export const AuthContext = createContext<
//   { state: AuthState; dispatch: React.Dispatch<AuthAction> } | undefined
// >(undefined);

//Початковий стан
const initialAuthState: ContextType = {
  isAuthenticated: false,
  token: null,
  user: null,
};

// Редуктор для оброки дій
function authReducer(state: ContextType, action: AuthAction): ContextType {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        user: action.payload.user,
      };

    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null,
      };

    default:
      return state;
  }
}

function App() {
  const [authState, dispatch] = useReducer(authReducer, initialAuthState);

  //Функія для входу в аккаунт
  const login = (token: string, user: any) => {
    dispatch({ type: "LOGIN", payload: { token, user } });
  };

  //Функція для виходу з аккаунту
  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };
  const authContextData = { ...authState, login, logout };

  return (
    <AuthContext.Provider value={authContextData}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WellcomePage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
