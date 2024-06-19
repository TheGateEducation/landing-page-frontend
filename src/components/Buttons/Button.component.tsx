import React from "react";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({text})=>{
    return(
        <button className="bg-customOrange hover:bg-customOrangeHover text-white font-bold py-2 px-5 rounded-xl">
            {text}
        </button>
    );
}
export default Button;