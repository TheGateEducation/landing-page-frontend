import React from "react";
import Background from './Background.component';

export const Welcome: React.FC = () => {
  return (
    <div className="sticky border-b-[0px] top-0 z-40 w-full bg-white dark:border-b-slate-300 dark:bg-background"> 
    <Background />
    <div className="flex flex-col items-center justify-center w-full h-screen">
        <h1 className="text-4xl font-bold text-center text-black dark:text-white">Welcome to my website</h1>
        <p className="text-lg text-center text-black dark:text-white">This is a simple website created using Next.js</p>
    </div>        
</div>
    );
}
export default Welcome;