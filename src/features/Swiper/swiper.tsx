import { useState } from "react";
import {
    Button,
    ButtonContainer,
    Card,
    CardImage,
    CardTitle,
    CardWrapper,
    Description,
    FinalScreen,
    FinalText,
    Rating,
    Wrapper,
} from "./styledSwiper";
import { mockMovies } from "../../common/mockMovies";
import { notifyBackend } from "../../core/backend";
import { useSwipeable } from "react-swipeable";
import { FcRating } from "react-icons/fc";
import { CgClose } from "react-icons/cg";
import { GiCheckMark } from "react-icons/gi";
import { MdRestartAlt } from "react-icons/md";

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

    const handleSwipe = (direction: "left" | "right") => {
        if (currentMovie) {
            const decision = direction === "right" ? "accept" : "reject";
            notifyBackendHandler(currentMovie.id, decision);
            setAnimation(direction);
            setTimeout(nextMovie, 500);
        }
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleSwipe("left"),
        onSwipedRight: () => handleSwipe("right"),
        trackMouse: true,
    });

    return (
        <Wrapper {...swipeHandlers}>
            {currentMovie ? (
                <>
                    <CardWrapper>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        <Card animation={animation}>
                            <CardTitle>{currentMovie.title}</CardTitle>
                            <Rating>
                                <FcRating /> {currentMovie.rating}/10
                            </Rating>
                            <CardImage
                                src={currentMovie.imageURL}
                                alt={currentMovie.title}
                            />
                            <Description>{currentMovie.summary}</Description>
                        </Card>
                    </CardWrapper>

                    <ButtonContainer>
                        <Button onClick={() => handleSwipe("left")}>
                            <CgClose />
                        </Button>
                        <Button accept onClick={() => handleSwipe("right")}>
                            <GiCheckMark />
                        </Button>
                    </ButtonContainer>
                </>
            ) : (
                <FinalScreen>
                    <FinalText>You've rated all the movies!</FinalText>
                    <Button onClick={() => setCurrentIndex(0)}>
                        <MdRestartAlt />
                    </Button>
                </FinalScreen>
            )}
        </Wrapper>
    );
};
