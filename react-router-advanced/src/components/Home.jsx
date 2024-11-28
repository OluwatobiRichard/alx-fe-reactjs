import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Welcome to the React Router Demo</h1>
            <p>
                This is the home page. Use the links below to explore different
                routing features.
            </p>
            <nav>
                <ul>
                    <li>
                        <Link to="/profile">Go to Profile</Link>
                    </li>
                    <li>
                        <Link to="/blog/1">View Blog Post 1</Link>
                    </li>
                    <li>
                        <Link to="/blog/2">View Blog Post 2</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
