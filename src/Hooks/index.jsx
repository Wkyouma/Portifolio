// useRandomBackground.js
import { useEffect, useState } from 'react';

const useRandomBackground = (backgrounds, interval) => {
    const [background, setBackground] = useState(backgrounds[0]);

    useEffect(() => {
        const randomizeBackground = () => {
            const randomIndex = Math.floor(Math.random() * backgrounds.length);
            setBackground(backgrounds[randomIndex]);
        };

        randomizeBackground(); 

        const intervalId = setInterval(randomizeBackground, interval);

        return () => clearInterval(intervalId);
    }, [backgrounds, interval]);

    return background;
};

export default useRandomBackground;