import React from 'react';
import logo from '../../images/brand.png';
import Image from 'next/image';

const Logo: React.FC = ({}) => {
    return(
        <div>
            <Image 
                src={logo} 
                alt="logo" 
                width={100} 
                height={100}
            />
    </div>
    );
};

export default Logo;