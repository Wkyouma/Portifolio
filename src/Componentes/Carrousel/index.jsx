import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex + 1) % images.length
        );
    };

    useEffect(() => {
        const timer = setInterval(nextImage, 5000);
        return () => clearInterval(timer);
    }, []);

    if (!images || images.length === 0) {
        return <div>Sem imagens</div>;
    }

    return (
        <div className="relative w-72 sm:w-96 overflow-hidden">
            <img 
                src={images[currentIndex]} 
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-60 object-cover rounded-lg"
            />
            
            <div className="flex justify-center mt-2 space-x-2">
                {images.map((_, index) => (
                    <button 
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 w-2 rounded-full ${
                            index === currentIndex 
                                ? 'bg-green-500' 
                                : 'bg-gray-300'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;