import React from 'react';
import FacebookLogo from '../images/facebook-logo.svg';
import InstagramLogo from '../images/instagram-logo.svg';
import TwitterLogo from '../images/twitter-logo.svg';
import GitHubLogo from '../images/github-logo.svg';
import WebLogo from '../images/www-logo.svg';

export default function Sidebar() {
    return (
        <aside className="flex">
            <ul>
                <li>
                    <a href="/" aria-label="Hack to School Facebook">
                        <FacebookLogo />
                    </a>
                </li>
                <li>
                    <a href="/" aria-label="Hack to School Instagram">
                        <InstagramLogo />
                    </a>
                </li>
                <li>
                    <a href="/" aria-label="Hack to School Twitter">
                        <TwitterLogo />
                    </a>
                </li>
                <li>
                    <a href="/" aria-label="Hack to School Twitter">
                        <GitHubLogo alt="GitHub Logo" />
                    </a>
                </li>
                <li>
                    <a href="/" aria-label="Hack to School Twitter">
                        <WebLogo />
                    </a>
                </li>
            </ul>
        </aside>
    );
}
