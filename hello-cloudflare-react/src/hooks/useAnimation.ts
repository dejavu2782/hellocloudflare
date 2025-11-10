import { useEffect, useRef } from 'react';

const useAnimation = () => {
    const elementRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (element) {
            const animate = () => {
                element.style.transform = `translateY(${Math.sin(Date.now() / 500) * 20}px)`;
                requestAnimationFrame(animate);
            };
            animate();
        }
    }, []);

    return elementRef;
};

export default useAnimation;