import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Blog from "./components/Blog";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile/*" element={<Profile />} />
                <Route path="/blog/:postId" element={<Blog />} />
                <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown routes */}
            </Routes>
        </Router>
    );
};

export default App;
