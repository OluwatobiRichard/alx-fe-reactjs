import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
};

const PostsComponent = () => {
    const {
        data,
        isLoading,
        isError,
        error,
        refetch,
        isFetching,
    } = useQuery(
        ["posts"],
        fetchPosts,
        {
            staleTime: 30000, // Data remains fresh for 30 seconds
            cacheTime: 600000, // Cache remains for 10 minutes
            refetchOnWindowFocus: false, // Prevent refetching on window focus
            keepPreviousData: true, // Keeps previous data when refetching
        }
    );

    if (isLoading) return <p>Loading posts...</p>;
    if (isError) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Posts</h2>
            <button onClick={() => refetch()} disabled={isFetching}>
                {isFetching ? "Refetching..." : "Refetch Posts"}
            </button>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsComponent;
