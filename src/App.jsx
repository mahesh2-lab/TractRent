import React, { useEffect, useState } from "react";
import {
  Route,
  Routes,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import Home from "./pages/dashboard/Home";
import { useAuthContext } from "./context/authContext";
import { Toaster } from "react-hot-toast";


const App = () => {
  const { authUser } = useAuthContext();
  console.log(authUser);

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <SignUp />}
          />

          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
};

export default App;
