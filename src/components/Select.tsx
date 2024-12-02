
import React from 'react';

type SelectProps = {
    options: { value: string; name: string }[];
    onChange: (value: string) => void;
    placeholder: string;
    value?: string;
};

const Select = ({ options, onChange, placeholder, value }: SelectProps) => {
    return (
        <select
            aria-label={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="border rounded ml-2 px-2"
        >
            <option value="">{placeholder}</option>
            {options.map((item, index) => (
                <option key={index} value={item.value}>
                    {item.name}
                </option>
            ))}
        </select>
    );
};

export default Select;
