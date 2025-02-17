import { ReactNode } from "react";

interface ButtonProps{
    variant: "primary" | "secondary";
    text: string;
    startIcon: ReactNode;
}

const varaintStyles = {
    "primary": "bg-primary-color text-white",
    "secondary": "bg-secondary-color text-purple-700"
}

const defaultStyles =  "rounded-md px-4 py-2 flex items-center"

export function Button({ variant, text, startIcon} : ButtonProps){

    return <button className={varaintStyles[variant] + " " + defaultStyles} >
        <div className="pr-2">
            {startIcon}
        </div>
        {text}
    </button>
}