/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import TextInput from './TextInput';

function SignUpForm({ onValidated, message, status }) {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [school, setSchool] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        email &&
            email.indexOf('@') > -1 &&
            firstName &&
            lastName &&
            school &&
            onValidated({
                EMAIL: email,
                FNAME: firstName,
                LNAME: lastName,
                SCHOOL: school,
            });
    }

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col my-24 w-4/6 mx-auto"
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
            <input
                className="cursor-pointer bg-green-500 py-4 text-white rounded mt-10"
                type="submit"
                value="Register Now"
            />
        </form>
    );
}

export default SignUpForm;
