import React from 'react';

interface MaxTextProps {
    text?: string;
    color?: 'customOrange' | 'whiteNotWhite' | 'customPurple';
    textarea?: 'left' | 'right' | 'center' | 'justify';
    children?: React.ReactNode; // Accept children as a prop
    
}

const MaxText: React.FC<MaxTextProps> = ({ text, color, textarea, children}) => {
    const colorClass = color === 'customOrange' ? 'text-customOrange'
        : color === 'whiteNotWhite' ? 'text-whiteNotWhite'
            : 'text-customPurple';
    const textAreaClass = textarea === 'left' ? 'text-left'
        : textarea === 'right' ? 'text-right'
            : textarea === 'center' ? 'text-center'
                : 'text-justify';

    return (
        <div className={`text-9xl font-bold ${colorClass} ${textAreaClass} my-20`}>
            <h1>{text}</h1>
            {children}
        </div>
    );
};

export default MaxText;
