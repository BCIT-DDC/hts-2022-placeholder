import React, { useState } from 'react';
import addToMailChimp from 'gatsby-plugin-mailchimp';
import SignUpForm from './SignUpForm';

function SignUp() {
    const [validation, setValidation] = useState({
        isValid: false,
        msg: '',
    });

    const handleSubmit = async (formData) => {
        const { EMAIL, FNAME, LNAME, SCHOOL } = formData;

        const { result, msg } = await addToMailChimp(EMAIL, {
            FNAME,
            LNAME,
            SCHOOL,
        });

        if (result === 'error') {
            return setValidation({ isValid: false, msg });
        }
        return setValidation({ isValid: true, msg });
    };

    return (
        <div className="signUpContainer">
            <SignUpForm
                onValidated={handleSubmit}
                validation={validation}
                setValidation={setValidation}
            />
        </div>
    );
}

export default SignUp;
