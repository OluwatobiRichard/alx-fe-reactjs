import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./component/Profile";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";
import useAuth from "./components/useAuth";

const App = () => {
    const auth = useAuth();

    return (
        <Router>
            <div>
                <button onClick={auth.isAuthenticated ? auth.logout : auth.login}>
                    {auth.isAuthenticated ? "Logout" : "Login"}
                </button>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/profile/*"
                        element={
                            <ProtectedRoute>
                                <Profile />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/blog/:id" element={<BlogPost />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
