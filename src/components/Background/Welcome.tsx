import React from "react";
import Background from './Background.component';
import WelcomeText from './TextComponents/WelcomeText.component';
import Button from '../Buttons/Button.component';
import Beach from '../../images/beach.png';

export const Welcome: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      <Background src={Beach} width={1800} height={0}/>
            <WelcomeText 
                primaryText="HAZ REALIDAD TU SUEÑO DE EDUCACIÓN INTERNACIONAL"  
                secondaryText="BIENVENIDOS"/>
      <Button text="ayuda"/>
    </div>
  );
}

export default Welcome;
