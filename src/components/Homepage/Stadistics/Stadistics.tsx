import React from 'react';
import CountUp from 'react-countup';

const Statistics: React.FC = () => {
    return (
        <div className="bg-[#799f90] py-8 text-white text-center">
            <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 py-[40px] ">
                <div className="flex flex-col items-center ">
                    <CountUp start={0} end={10} duration={4} delay={0}>
                        {({ countUpRef }) => (
                            <div className="text-8xl font-bold">
                                <span className="text-7xl">+</span>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>
                    <p className="mt-2 text-lg">Países</p>
                </div>
                <div className="flex flex-col items-center">
                    <CountUp start={0} end={100} duration={4} delay={0}>
                        {({ countUpRef }) => (
                            <div className="text-8xl font-bold">
                                <span className="text-7xl">+</span>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>
                    <p className="mt-2 text-lg">Instituciones educacionales</p>
                </div>
                <div className="flex flex-col items-center">
                    <CountUp start={0} end={300} duration={4} delay={0}>
                        {({ countUpRef }) => (
                            <div className="text-8xl font-bold">
                                <span className="text-7xl">+</span>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>
                    <p className="mt-2 text-lg">Programas</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
