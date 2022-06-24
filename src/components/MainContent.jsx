import React, { useState } from 'react';

import Hero from './Hero';
import ModalRegistration from './ModalRegistration';
import SignUp from './SignUp';

export default function MainContent() {
    const [modalToggle, setModalToggle] = useState(false);

    return (
        <article>
            <Hero modalToggle={modalToggle} handleSignupView={setModalToggle} />
            {modalToggle && (
                <ModalRegistration
                    modalToggle={modalToggle}
                    handleSignupView={setModalToggle}
                />
            )}
            <SignUp />
        </article>
    );
}
