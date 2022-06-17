/* eslint-disable no-param-reassign */
import { useState } from 'react';

const useValidation = (inputs) => {
    const [isValid, setIsValid] = useState({});
    const inputFields = { ...inputs };

    inputFields.forEach((input) => {
        if (!input.value) {
            input.valid = false;
            setIsValid({ isValid, ...input });
        } else {
            input.valid = true;
            setIsValid({ isValid, ...input });
        }
    });
    return isValid;
};

export default useValidation;
