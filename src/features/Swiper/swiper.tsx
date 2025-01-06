import { useState } from "react";
import { Wrapper } from "./styledSwiper";
import { mockMovies } from "../../common/mockMovies";
import { notifyBackend } from "../../core/backend";
import { useSwipeable } from "react-swipeable";

export const Swiper = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animation, setAnimation] = useState<string | undefined>(undefined);
    const [error, setError] = useState<string | null>(null);

    const currentMovie = currentIndex >= 0 ? mockMovies[currentIndex] : null;

    const nextMovie = () => {
        setAnimation(undefined);
        setCurrentIndex((prevIndex) =>
            prevIndex < mockMovies.length - 1 ? prevIndex + 1 : -1
        );
    };

    const notifyBackendHandler = async (
        movieId: string,
        decision: "accept" | "reject"
    ) => {
        try {
            await notifyBackend(movieId, decision);
        } catch {
            setError(
                "Failed to connect to the backend. Please try again later."
            );
        }
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleSwipe("left"),
        onSwipedRight: () => handleSwipe("right"),
        trackMouse: true,
    });

    const handleSwipe = (direction: "left" | "right") => {
        if (currentMovie) {
            const decision = direction === "right" ? "accept" : "reject";
            notifyBackend(currentMovie.id, decision);
            setAnimation(direction);
            setTimeout(nextMovie, 500);
        }
    };

    return (
        <Wrapper>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <CardWrapper>
                <Card animation={animation}>
                    <Title>{currentMovie.title}</Title>
                    <span>Rating: {currentMovie.rating}/10</span>
                    <MovieImage
                        src={currentMovie.imageURL}
                        alt={currentMovie.title}
                    />
                    <p>{currentMovie.summary}</p>
                </Card>
            </CardWrapper>
        </Wrapper>
    );
};
