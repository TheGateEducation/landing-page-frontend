import React from "react";
import Stadistics, {StadisticsProps} from "@src/components/Text/Stadistics.component";;

{/* Parametros por default, ya que se repetian para todos los componentes  */}
const commonNumberProps: Pick<StadisticsProps, 'secondaryColor' | 'secondaryTextAlign'> = {
    secondaryColor: 'whiteNotWhite',
    secondaryTextAlign: 'left'
};

export const Numbers: React.FC = () => {
    return (
        <div className='flex w-full h-auto justify-center p-8 sm:p-16 md:p-24 lg:p-36 space-x-16 sm:space-x-16 md:space-x-96 lg:space-x-32 xl:space-x-100 bg-customMint'>
            <Stadistics
                counterTo={10}
                secondaryText="Países"
                {...commonNumberProps}
            />
            <Stadistics
                counterTo={100}
                secondaryText="Instituciones educacionales"
                {...commonNumberProps}
            />
            <Stadistics
                counterTo={300}
                secondaryText="Programas"
                {...commonNumberProps} />
        </div>
    );
};