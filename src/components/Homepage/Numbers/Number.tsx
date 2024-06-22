import React from "react";
import Number from "@src/components/Text/Number.component";

export const Numbers: React.FC = () => {
    return (
        <div className=' flex w-full h-auto justify-center p-36 space-x-60 bg-customMint '>
            <Number primaryColor="whiteNotWhite" primaryTextAlign="center" primaryText="+"
                counterTo={10}
                secondaryColor="whiteNotWhite" secondaryText="Países" secondaryTextAlign="center" />

            <Number primaryColor="whiteNotWhite" primaryTextAlign="center" primaryText="+"
                counterTo={100}
                secondaryColor="whiteNotWhite" secondaryText="Instituciones educacionales" secondaryTextAlign="center" />

            <Number primaryColor="whiteNotWhite" primaryTextAlign="center" primaryText="+"
                counterTo={300}
                secondaryColor="whiteNotWhite" secondaryText="Programas" secondaryTextAlign="center" />
        </div>
    );
};