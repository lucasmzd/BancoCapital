import React, { useState } from 'react';
import styles from './Carousel.module.css';
import image1 from '../../assets/Carousel/carouselN1.png';
import image2 from '../../assets/Carousel/carouselN2.png';
import image3 from '../../assets/Carousel/carouselN3.png';
function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [image1, image2, image3];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className={styles.carousel}>
            <button className={styles.controlPrev} onClick={handlePrev}>
                &#10094;
            </button>
            <div className={styles.carouselInner}>
                <img
                    className={styles.carouselImage}
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                />
            </div>
            <button className={styles.controlNext} onClick={handleNext}>
                &#10095;
            </button>
        </div>
    );
}

export default Carousel;
