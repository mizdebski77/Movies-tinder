export const notifyBackend = async (
    movieId: string,
    decision: "accept" | "reject"
): Promise<void> => {
    try {
        const response = await fetch(
            "https://mock-backend-url.com/decision",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ movieId, decision }),
            }
        );

        if (!response.ok) {
            throw new Error("Failed to notify backend");
        }
    } catch (error) {
        console.error("Backend notification error:", error);
        throw error;
    }
};