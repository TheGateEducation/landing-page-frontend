import React from 'react';

interface UnderlinedTextProps {
    text: string;
    color: 'customOrange' | 'whiteNotWhite' | 'customPurple';
    textarea: 'left' | 'right' | 'center' | 'justify';
}

const UnderlinedText: React.FC<UnderlinedTextProps> = ({ text, color, textarea }) => {
    const colorClass = color === 'customOrange' ? 'text-customOrange'
        : color === 'whiteNotWhite' ? 'text-whiteNotWhite'
            : 'text-customPurple';
    const textAreaClass = textarea === 'left' ? 'text-left'
        : textarea === 'right' ? 'text-right'
            : textarea === 'center' ? 'text-center'
                : 'text-justify';

    return (
        <div className={`text-xl font-bold underline ${textAreaClass} ${colorClass} my-0`}>
            <h1>{text}</h1>
        </div>
    );
};

export default UnderlinedText;