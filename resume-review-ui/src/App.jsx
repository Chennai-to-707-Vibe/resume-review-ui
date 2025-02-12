import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { isAuthenticated } from "./utils/auth";

const App = () => {
  const [authState, setAuthState] = useState(isAuthenticated());

  useEffect(() => {
    setAuthState(isAuthenticated());
  }, []);

  return (
    <Router>
      <Routes>
        {/* Redirect to Login if not authenticated */}
        <Route path="/" element={authState ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login setAuth={setAuthState} />} />
      </Routes>
    </Router>
  );
};

export default App;
