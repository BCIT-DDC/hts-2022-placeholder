/* eslint-disable react/prop-types */
import React from 'react';

export default function TextInput({
    label,
    type,
    name,
    placeholder,
    onChangeHandler,
}) {
    return (
        <div className="flex flex-col">
            <label className="font-bold text-lg mb-1" htmlFor={name}>
                {label}
            </label>
            <input
                className="border border-gray-300 rounded"
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={(e) => onChangeHandler(e.target.value)}
            />
        </div>
    );
}
