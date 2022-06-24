/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import TextInput from './TextInput';

function SignUpForm({ onValidated, validation, setValidation }) {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [school, setSchool] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (
            email &&
            email.indexOf('@') > -1 &&
            firstName &&
            lastName &&
            school
        ) {
            onValidated({
                EMAIL: email,
                FNAME: firstName,
                LNAME: lastName,
                SCHOOL: school,
            });
            setValidation('');
        } else {
            setValidation({
                isValid: false,
                msg: 'Please fill out all the fields',
            });
        }
    }

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col my-24 mx-auto"
        >
            <h3 className="text-2xl font-bold mb-6">
                Sign up to recieve updates!
            </h3>
            <div className="space-y-6">
                <TextInput
                    type="text"
                    name="firstName"
                    label="First Name"
                    value={firstName}
                    onChangeHandler={setFirstName}
                    placeholder="First Name"
                />
                <TextInput
                    type="text"
                    name="lastName"
                    label="Last Name"
                    value={lastName}
                    onChangeHandler={setLastName}
                    placeholder="Last Name"
                />
                <TextInput
                    type="email"
                    name="email"
                    label="Email"
                    value={email}
                    onChangeHandler={setEmail}
                    placeholder="Email"
                />
                <TextInput
                    type="text"
                    name="school"
                    label="School"
                    value={school}
                    onChangeHandler={setSchool}
                    placeholder="School"
                />
            </div>
            <span
                className={`mt-2 text-lg ${
                    validation.isValid ? 'text-green-600' : 'text-red-600'
                }`}
            >
                {validation.msg}
            </span>
            <input
                className="text-lg font-semibold cursor-pointer bg-green-500 py-4 text-white rounded mt-10 hover:bg-green-600 ease-in-out duration-100"
                type="submit"
                value="Register Now"
            />
        </form>
    );
}

export default SignUpForm;
