import { useState, useEffect } from 'react';

export const useYOffset = () => {
    const [offset, setOffset] = useState(window.pageYOffset);

    const handleWheel = () => {
        setOffset(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener('wheel', handleWheel);
        return () => window.removeEventListener('wheel', handleWheel);
    }, []);

    return offset;
};
