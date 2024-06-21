import AnimatedCounter from '@src/components/Text/AnimatedCounter.component';
import PrimaryText from '@src/components/Text/PrimaryText.component';

export const Number: React.FC = () => {
    return (
        <div className='relative w-full h-auto flex items-center justify-center p-1 bg-customMint '>
                <main className=" flex flex-initial border-4 border-indigo-500/100">
                    <PrimaryText color='whiteNotWhite' textarea='center' text={"+"}>
                        <AnimatedCounter from={0} to={10} />
                    </PrimaryText>
                    <PrimaryText color='whiteNotWhite' textarea='center' text={"+"}>
                        <AnimatedCounter from={0} to={100} />
                    </PrimaryText>
                    <PrimaryText color='whiteNotWhite' textarea='center' text={"+"}>
                        <AnimatedCounter from={0} to={300} />
                    </PrimaryText>
                </main>
        </div>
    )
}

export default Number;