/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import SignUp from './SignUp';

export default function ModalRegistration({ modalToggle, handleSignupView }) {
    return (
        <div className="modal absolute top-0 left-0 bg-white h-screen w-screen sm:w-11/12 md:w-4/6 max-w-2xl p-4 flex flex-col items-center">
            <div className="flex justify-end text-2xl w-full">
                <button
                    type="button"
                    className="close"
                    onClick={() => handleSignupView(!modalToggle)}
                >
                    <FontAwesomeIcon icon={faX} />
                </button>
            </div>
            <div className="w-11/12">
                <SignUp />
            </div>
        </div>
    );
}
