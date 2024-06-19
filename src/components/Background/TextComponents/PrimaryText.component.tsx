import React from 'react';

interface PrimaryTextProps {
    text: string;
}

const PrimaryText: React.FC<PrimaryTextProps> = ({ text }) => {
    return (
        <div className="text-6xl font-bold text-center text-white my-20">
            <h1>{text}</h1>
        </div>
    );
}

export default PrimaryText;