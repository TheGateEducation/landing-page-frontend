import React from 'react';
import Image from 'next/image';

const Logo: React.FC = ({}) => {
    return(
        <div>
            <Image 
                src='https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/brand.png' 
                alt="logo" 
                width={100} 
                height={100}
            />
    </div>
    );
};

export default Logo;