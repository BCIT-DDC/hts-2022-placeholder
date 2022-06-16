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
        <>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={(e) => onChangeHandler(e.target.value)}
            />
        </>
    );
}
