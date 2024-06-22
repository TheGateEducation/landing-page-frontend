import React from 'react';
import PrimaryText from '@src/components/Text/PrimaryText.component';
import SecondaryText from '@src/components/Text/SecondaryText.component';
import AnimatedCounter from '@src/components/Text/AnimatedCounter.component';
import MaxText from './MaxText.component';

interface StatsBlockProps {
    primaryColor: 'customOrange' | 'whiteNotWhite' | 'customPurple';
    primaryTextAlign: 'left' | 'right' | 'center' | 'justify';
    primaryText: string;

    counterTo: number;
    secondaryColor: 'customOrange' | 'whiteNotWhite' | 'customPurple';
    secondaryTextAlign: 'left' | 'right' | 'center' | 'justify';
    secondaryText: string;
}

const StatsBlock: React.FC<StatsBlockProps> = ({
    primaryColor,
    primaryTextAlign,
    primaryText,
    counterTo,
    secondaryColor,
    secondaryTextAlign,
    secondaryText
}) => {
    return (
        <div className='flex flex-row items-center justify-center space-x-4 h-20 w-20'>
            <PrimaryText color={primaryColor} textarea={primaryTextAlign} text={primaryText}>
                <MaxText>
                    <AnimatedCounter to={counterTo} />
                </MaxText>
                <SecondaryText color={secondaryColor} textarea={secondaryTextAlign} text={secondaryText} />
            </PrimaryText>
        </div>
    );
};

export default StatsBlock;