import React from 'react';

import Logo from './Logo';

export default function NavBar() {
    return (
        <div className="w-full fixed top-0">
            <nav className="relative">
                {/* */}
                <div>
                    <div className="py-1 flex justify-between h-12 md:h-14">
                        <div className="flex flex-row justify-between md:w-full">
                            <div className="flex-shrink-0 flex items-center">
                                <Logo />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
