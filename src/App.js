import React from "react";
import AppRouter from "./components/AppRouter";
import AuthContextProvider from "./Context/AuthContext";
import { store } from "./app/store";
import { Provider } from "react-redux";

function App() {
  
  
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
