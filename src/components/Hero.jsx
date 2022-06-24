/* eslint-disable react/prop-types */
import React from 'react';

export default function Hero({ handleSignupView, modalToggle }) {
    return (
        <div className="h-screen w-auto bg-cover bg-hero-bg">
            <button
                onClick={() => handleSignupView(!modalToggle)}
                type="button"
                className="text-lg font-semibold cursor-pointer rounded bg-green-500 py-4 text-white hover:bg-green-600 ease-in-out duration-100 w-64"
            >
                Get Notified
            </button>
        </div>
    );
}
