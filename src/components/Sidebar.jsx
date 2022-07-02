/* eslint-disable prettier/prettier */
import React from 'react';
import SocialMediaLogos from './SocialMediaLogos';
import FacebookLogo from '../images/facebook-logo.svg';
import InstagramLogo from '../images/instagram-logo.svg';
import TwitterLogo from '../images/twitter-logo.svg';
import GitHubLogo from '../images/github-logo.svg';
import WebLogo from '../images/www-logo.svg';

export default function Sidebar() {
    return (
        <ul className="flex flex-col h-full justify-center">
            <a href="/" aria-label="Hack to School Facebook">
                <SocialMediaLogos src={FacebookLogo} alt="Facebook Logo"/>
            </a>
            <a href="/" aria-label="Hack to School Instgram">
                <SocialMediaLogos src={InstagramLogo} alt="Instagram Logo"/>
            </a>
            <a href="/" aria-label="Hack to School Twitter">
                <SocialMediaLogos src={TwitterLogo} alt="Facebook Logo" />
            </a>
            <a href="/" aria-label="Hack to School Github">
                <SocialMediaLogos src={GitHubLogo} alt="GitHub Logo"/>
            </a>
            <a href="/" aria-label="Hack to School Website">
                <SocialMediaLogos href="/" src={WebLogo} alt="World Wide Web Logo"/>
            </a>
        </ul>
    );
}
