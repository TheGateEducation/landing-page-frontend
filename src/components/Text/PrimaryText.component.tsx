import React from 'react';

interface PrimaryTextProps {
    text?: string;
    color?: 'customOrange' | 'whiteNotWhite' | 'customPurple';
    textarea?: 'left' | 'right' | 'center' | 'justify';
    children?: React.ReactNode; // Accept children as a prop
}

const PrimaryText: React.FC<PrimaryTextProps> = ({ text, color = "whiteNotWhite", textarea= "center", children }) => {
    const colorClass = color === 'customOrange' ? 'text-customOrange'
        : color === 'whiteNotWhite' ? 'text-whiteNotWhite'
            : 'text-customPurple';
    const textAreaClass = textarea === 'left' ? 'text-left'
        : textarea === 'right' ? 'text-right'
            : textarea === 'center' ? 'text-center'
                : 'text-justify';

    return (
        <div className={`text-4xl sm:text-6xl font-bold ${colorClass} ${textAreaClass} `}>
            <h1>{text}</h1>
            {children}
        </div>
    );
};

export default PrimaryText;
