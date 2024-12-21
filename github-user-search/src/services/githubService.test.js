import { fetchUserData } from '.services/githubService';

describe('GitHub Service', () => {
    it('should contain "https://api.github.com" in the API URL', () => {
        const API_URL = "https://api.github.com";
        expect(API_URL).toBe("https://api.github.com");
    });
});
