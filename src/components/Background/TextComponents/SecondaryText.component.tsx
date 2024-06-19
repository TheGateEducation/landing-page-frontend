import React from 'react';

interface SecondaryTextProps {
    text: string;
}

const SecondaryText: React.FC<SecondaryTextProps> = ({ text }) => {
    return (
        <div className="text-2xl font-bold text-white ">
            <h1>{text}</h1>
        </div>
    );
}

export default SecondaryText;