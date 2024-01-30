import React from "react";

interface InputProps {
    name: string;
    type: string;
    placeholder: string;
    value?: any;
    onChange?: any;
    classe?:string;
}

export const Input = ({ name, type, placeholder, value, onChange, classe }: InputProps) => {
    return (
        <input
            value={value}
            type={type}
            name={name}
            className={`${classe} w-15 p-2 bg-slate-200 text-black` }
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};
