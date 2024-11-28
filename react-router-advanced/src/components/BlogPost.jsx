import React from "react";
import { useParams } from "react-router-dom";

const Blog = () => {
    const { postId } = useParams();
    return (
        <div>
            <h1>Blog Post {postId}</h1>
            <p>Details about blog post {postId} go here.</p>
        </div>
    );
};

export default Blog;
