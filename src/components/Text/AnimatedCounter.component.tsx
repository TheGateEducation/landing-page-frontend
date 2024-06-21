'use client';

import { KeyframeOptions, useIsomorphicLayoutEffect, animate } from 'framer-motion';
import { useRef } from 'react';

type AnimatedCOunterProps = {
    from: number;
    to: number,
    animationOption?: KeyframeOptions
}

const AnimatedCounter = ({ from, to, animationOption }: AnimatedCOunterProps) => {
    const ref = useRef<HTMLSpanElement>(null);

    useIsomorphicLayoutEffect(() => {
        const element = ref.current;
        if (!element) return;

        element.textContent = from.toString();
        
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
    }, [from, to, animationOption]);

    return <span ref={ref} />;
};
    
export default AnimatedCounter;

