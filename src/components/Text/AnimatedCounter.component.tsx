'use client';

import { KeyframeOptions, useIsomorphicLayoutEffect, animate } from 'framer-motion';
import { useRef } from 'react';

type AnimatedCOunterProps = {
    to: number,
    animationOption?: KeyframeOptions
}

const AnimatedCounter = ({ to, animationOption }: AnimatedCOunterProps) => {
    const ref = useRef<HTMLSpanElement>(null);

    useIsomorphicLayoutEffect(() => {
        const element = ref.current;
        if (!element) return;

       const from = 0;
        
        const controls = animate(from, to, {
            duration: 5,
            ease: 'easeOut',
            ...animationOption,
            onUpdate(value) {
                element.textContent = String(value.toFixed(0));
            }
        });
        return() => {
            controls.stop();
        };
    }, [0, to, animationOption]);

    return <span ref={ref} />;
};
    
export default AnimatedCounter;

