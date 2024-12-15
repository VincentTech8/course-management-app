import { useState, useEffect } from "react";

interface UseCarouselProps {
  totalImages: number;
  interval?: number;
}

export const useCarousel = ({
  totalImages,
  interval = 5000, // i.e., 5 seconds
}: UseCarouselProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % totalImages);
    }, interval);

    return () => clearInterval(timer);
  }, [totalImages, interval]);

  return currentImage;
};
