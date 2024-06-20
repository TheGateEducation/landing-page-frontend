import React from 'react';

interface PrimaryTextProps {
    text: string;
    color: 'customOrange' | 'whiteNotWhite' | 'customPurple';
    textarea: 'left' | 'right' | 'center' | 'justify';
}

const PrimaryText: React.FC<PrimaryTextProps> = ({ text, color, textarea }) => {
    const colorClass = color === 'customOrange' ? 'text-customOrange' 
        : color === 'whiteNotWhite' ? 'text-whiteNotWhite' 
        : 'text-customPurple';
    const textAreaClass = textarea === 'left' ? 'text-left'
        : textarea === 'right' ? 'text-right'
        : textarea === 'center' ? 'text-center'
        : 'text-justify';

    return (
        <div className={`text-7xl font-bold ${colorClass} ${textAreaClass} my-20`}>
            <h1>{text}</h1>
        </div>
    );
};

export default PrimaryText;
