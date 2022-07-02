import React from 'react';

import Hero from './Hero';

export default function MainContent() {
    return (
        <article className="flex w-full h-full">
            <Hero />
            <section className="flex flex-col justify-center items-center w-4/6">
                <h2 className="text-8xl italic">
                    August <br /> 2022
                </h2>
            </section>
        </article>
    );
}
