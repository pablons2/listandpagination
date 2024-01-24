import React from "react";

interface InputProps {
    name: string;
    type: string;
    placeholder: string;
    value: any;
    onChange: any;
}

export const Input = ({ name, type, placeholder, value, onChange }: InputProps) => {
    return (
        <input
            value={value}
            type={type}
            name={name}
            className="w-full p-10 bg-slate-200 text-black" 
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};
