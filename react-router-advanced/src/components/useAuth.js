import { useState } from "react";

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Toggle authentication for demonstration purposes
    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    // Provide the authentication state and toggle functions
    return { isAuthenticated, login, logout };
};

export default useAuth;
