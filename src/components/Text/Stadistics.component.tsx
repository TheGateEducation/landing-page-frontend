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
        <div className='flex flex-row items-center justify-center space-x-4 h-20 w-20'>
            <PrimaryText color={secondaryColor} textarea={secondaryTextAlign} text={"+"} />
            <MaxText>
                <AnimatedCounter to={counterTo} />
            </MaxText>
            <SecondaryText color={secondaryColor} textarea={secondaryTextAlign} text={secondaryText} />
        </div>
    );
};

export default Stadistics;