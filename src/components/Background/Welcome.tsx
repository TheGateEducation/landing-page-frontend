import React from "react";
import Background from './Background.component';
import PrimaryText from "./TextComponents/PrimaryText.component";
import SecondaryText from "./TextComponents/SecondaryText.component";
import beach from '../../images/beach.png';


export const Welcome: React.FC = () => {
  return (
    <div>
    <Background src={beach} width={1800} height={0}/>

        <div className="flex flex-col items-center justify-between w-[1400px] h-[200px] y-90 absolut">
            <SecondaryText text="BIENVENIDOS"/>
            <PrimaryText text="HAZ REALIDAD TU SUEÑO DE EDUCACIÓN INTERNACIONAL"/>
        </div>          
    </div>
    );
}
export default Welcome;