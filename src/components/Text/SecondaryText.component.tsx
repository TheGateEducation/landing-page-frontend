import React from 'react';

interface SecondaryTextProps {
    text: string;
    color?: 'customOrange' | 'whiteNotWhite' | 'customPurple';
    textarea?: 'left' | 'right' | 'center' | 'justify';
}

const SecondaryText: React.FC<SecondaryTextProps> = ({ text, color = "whiteNotWhite", textarea= "center"}) => {
    const colorClass = color === 'customOrange' ? 'text-customOrange'
        : color === 'whiteNotWhite' ? 'text-whiteNotWhite'
            : 'text-customPurple';
    const textAreaClass = textarea === 'left' ? 'text-left'
        : textarea === 'right' ? 'text-right'
            : textarea === 'center' ? 'text-center'
                : 'text-justify';

    return (
        <div className={`text-2xl sm:text-3xl font-semibold ${textAreaClass} ${colorClass} pt-5 `}>
            <h1>{text}</h1>
        </div>
    );
};

export default SecondaryText;