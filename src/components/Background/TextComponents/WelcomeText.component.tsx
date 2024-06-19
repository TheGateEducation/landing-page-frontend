import React from "react";
import SecondaryText from "./SecondaryText.component";
import PrimaryText from "./PrimaryText.component";

interface WelcomeTextProps {
  primaryText: string;
  secondaryText: string;
}

const WelcomeText: React.FC<WelcomeTextProps> = ({primaryText, secondaryText,}) => {
    return (
      <div className="flex flex-col items-center justify-center w-full h-screen relative">
        <div className="max-w-screen-lg text-center">
            <SecondaryText text={secondaryText}/>
            <PrimaryText text={primaryText}/>
        </div>
      </div>
    );
};

export default WelcomeText;
