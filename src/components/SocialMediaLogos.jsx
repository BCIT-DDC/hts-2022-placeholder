/* eslint-disable react/prop-types */
import React from 'react';

export default function SocialMediaLogos(props) {
    const { src, alt } = props;
    return (
        <li className="my-8" key={src}>
            <img className="block h-6 w-auto" src={src} alt={alt} />
        </li>
    );
}
