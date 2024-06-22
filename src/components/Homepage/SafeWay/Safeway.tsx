import SecondaryText from "@src/components/Text/SecondaryText.component";
import React from "react";


export const Safeway: React.FC = () => {
  return (
    <div className="relative w-full h-128">
      <div className="flex flex-col items-center justify-center w-full h-full text-center relative ">
        <div className="max-w-screen-lg space-y-10">
          <SecondaryText text="La forma más segura y fácil de estudiar en el extranjero" color="customOrange" textarea="center" />
        </div>
      </div>
    </div>
  );
}