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
            // email.indexOf('@') > -1 &&
            // firstName &&
            // lastName &&
            // school &&
            onValidated({
                EMAIL: email,
                FNAME: firstName,
                LNAME: lastName,
                SCHOOL: school,
            });
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <h3>Sign up to recieve updates!</h3>
            <TextInput
                type="email"
                name="email"
                label="Email"
                value={email}
                onChangeHandler={setEmail}
                placeholder="Email"
            />
            <input type="submit" value="Register" />
        </form>
    );
}

export default SignUpForm;
