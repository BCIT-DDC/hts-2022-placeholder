import React from 'react';
import addToMailChimp from 'gatsby-plugin-mailchimp';
import SignUpForm from './SignUpForm';

function SignUp() {
    const handleSubmit = async (formData) => {
        const { EMAIL, FNAME, LNAME, SCHOOL } = formData;

        const res = await addToMailChimp(EMAIL, {
            FNAME: 'asd',
            LNAME: 'asd',
            SCHOOL: 'asd',
        });
        console.log(res);
    };

    return (
        <div className="signUpContainer">
            <SignUpForm onValidated={handleSubmit} />
            {/* <Message /> */}
        </div>
    );
}

export default SignUp;
