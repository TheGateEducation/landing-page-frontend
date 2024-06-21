import AnimatedCounter from '@src/components/Text/AnimatedCounter.component';
import PrimaryText from '@src/components/Text/PrimaryText.component';
import SecondaryText from './SecondaryText.component';

export const Number: React.FC = () => {
    return (
        <div className='relative w-full h-auto flex items-center justify-center p-1 bg-customMint '>
            <main className="flex flex-row space-x-40 pt-20 pb-20">
                <div className='flex   border-4 border-indigo-500/100'>
                    <PrimaryText color='whiteNotWhite' textarea='center' text={"+"}>
                        <AnimatedCounter from={0} to={10} />
                        <SecondaryText color='whiteNotWhite' textarea='left' text={"Países"} />
                    </PrimaryText>
                </div>

                <div className='flex flex  border-4 border-indigo-500/100'>
                    <PrimaryText color='whiteNotWhite' textarea='center' text={"+"}>
                        <AnimatedCounter from={0} to={100} />
                        <SecondaryText color='whiteNotWhite' textarea='left' text={"Instituciones educacionales"} />
                    </PrimaryText>
                </div>
                <div className='flex flex  border-4 border-indigo-500/100'>
                    <PrimaryText color='whiteNotWhite' textarea='center' text={"+"}>
                        <AnimatedCounter from={0} to={300} />
                        <SecondaryText color='whiteNotWhite' textarea='left' text={"Programas"} />
                    </PrimaryText>
                </div>
            </main >
        </div>

    )
}

export default Number;