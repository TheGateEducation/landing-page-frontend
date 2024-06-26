import React from 'react';
import AnimatedCounter from '@src/components/Text/AnimatedCounter.component';
import PrimaryText from '@src/components/Text/PrimaryText.component';
import SecondaryText from '@src/components/Text/SecondaryText.component';
import MaxText from './MaxText.component';

export interface StadisticsProps {
    counterTo: number;
    secondaryColor: 'customOrange' | 'whiteNotWhite' | 'customPurple';
    secondaryTextAlign: 'left' | 'right' | 'center' | 'justify';
    secondaryText: string;
}

const Stadistics: React.FC<StadisticsProps> = ({
    counterTo,
    secondaryColor,
    secondaryTextAlign,
    secondaryText
}) => {
    return (
        <>
            <PrimaryText color={secondaryColor} textarea={secondaryTextAlign} text={"+"} />
            <MaxText>
                <AnimatedCounter to={counterTo} />
            </MaxText>
            <SecondaryText color={secondaryColor} textarea={secondaryTextAlign} text={secondaryText} />
        </>
    );
};

export default Stadistics;