import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/profile/*"
                    element={
                        <ProtectedRoute isAuth={isAuthenticated}>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
                {isAuthenticated ? "Logout" : "Login"}
            </button>
        </Router>
    );
};

export default App;
