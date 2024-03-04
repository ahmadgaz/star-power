import React from "react";
import { useLottie } from "lottie-react";

interface StarsProps {
  rating: number;
}

const Stars: React.FC<StarsProps> = ({ rating }) => {
  const { View } = useLottie({
    animationData:
      rating >= 0 && rating < 1
        ? require("./assets/star-rating-0.5.json")
        : rating >= 1 && rating < 1.5
        ? require("./assets/star-rating-1.json")
        : rating >= 1.5 && rating < 2
        ? require("./assets/star-rating-1.5.json")
        : rating >= 2 && rating < 2.5
        ? require("./assets/star-rating-2.json")
        : rating >= 2.5 && rating < 3
        ? require("./assets/star-rating-2.5.json")
        : rating >= 3 && rating < 3.5
        ? require("./assets/star-rating-3.json")
        : rating >= 3.5 && rating < 4
        ? require("./assets/star-rating-3.5.json")
        : rating >= 4 && rating < 4.5
        ? require("./assets/star-rating-4.json")
        : rating >= 4.5 && rating < 5
        ? require("./assets/star-rating-4.5.json")
        : require("./assets/star-rating-5.json"),
    autoplay: true,
    loop: false,
  });

  return View;
};

export default Stars;
