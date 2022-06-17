import React from 'react';
import addToMailChimp from 'gatsby-plugin-mailchimp';
import SignUpForm from './SignUpForm';

function SignUp() {
    const handleSubmit = async (formData) => {
        const { EMAIL, FNAME, LNAME, SCHOOL } = formData;
        console.log(formData);

        // const res = await addToMailChimp(EMAIL, {
        //     FNAME,
        //     LNAME,
        //     SCHOOL,
        // });
        // console.log(res);
    };

    return (
        <div className="signUpContainer">
            <SignUpForm onValidated={handleSubmit} />
            {/* <Message /> */}
        </div>
    );
}

export default SignUp;
    