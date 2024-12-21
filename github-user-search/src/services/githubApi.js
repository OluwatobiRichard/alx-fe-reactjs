const BASE_URL = "https://api.github.com";

export const fetchUserData = async (username) => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error("Looks like we cant find the user");
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};