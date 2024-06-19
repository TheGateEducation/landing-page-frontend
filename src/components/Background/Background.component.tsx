import React from 'react';
import beach from '../../images/beach.png';
import Image from 'next/image';


function Background (){
    return(
        <div>
            <Image
            src={beach}
            alt="backround" 
            width={1800} 
            height={100}
            />

        </div>
        
    );
}

export default Background;