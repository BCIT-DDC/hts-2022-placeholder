/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

function LogoIcon(props) {
    return (
        <svg
            width={114}
            height={90}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                opacity={0.87}
                d="M12.759 43.83c3.657 5.577 8.863 10.576 12.88 15.256 4.019 4.681 8.406 9.343 10.557 15.124 16.916 45.456 67.801-23.049 70.755-39.11.73-3.965.205-8.316-2.652-11.114-4.028-3.945-12.333-5.53-25.17-4.923-22.433 1.06-32.924-6.124-42.357-7.915C14.587 6.935.424 25.025 12.76 43.83Z"
                fill="url(#a)"
            />
            <path
                d="M77.79 75.335c-20.908-7.996-61.615 29.393-70.714-.41C1.842 57.783 30.061 28.05 49.784 15.643 67.774 4.327 89.591 7.8 86.916 30 84.566 49.49 114 89.185 77.79 75.335Z"
                fill="url(#b)"
            />
            <path
                opacity={0.87}
                d="M1.838 16.432c.944.977 4.195 3.094 5.38.32.281-.657.404-1.376.722-2.015 1.263-2.546 5.88-3.403 6.19-6.182.81-7.284-20.363-.477-12.292 7.877Z"
                fill="url(#c)"
            />
            <path
                opacity={0.87}
                d="M101.686 68.91c-.93-2.754 1.253-4.394 4.737-5.247 2.478-.607 4.004-1.666 5.125-1.345 5.725 1.638-6.844 15.535-9.862 6.592Z"
                fill="url(#d)"
            />
            <path fill="#27282C" d="M18.608 0h71.697v71.697H18.608z" />
            <path
                d="M41.977 45.97h-5.818V35.612H30.2V45.97h-5.817V21.387h5.817v9.436h5.96v-9.436h5.818V45.97Zm21.28-1.1c-.793.52-1.715.935-2.768 1.242-1.04.308-2.176.461-3.405.461-2.413 0-4.228-.615-5.446-1.844-1.218-1.23-1.827-2.957-1.827-5.18V31h-3.955v-3.867h3.955v-4.08l5.605-.673v4.753h6.066L60.932 31h-5.516v8.55c0 .934.207 1.602.621 2.004.426.402 1.112.603 2.058.603a6.658 6.658 0 0 0 3.299-.852l1.862 3.566Zm21.988-6.083c0 1.525-.402 2.879-1.206 4.062-.804 1.17-1.963 2.087-3.477 2.749-1.501.65-3.275.975-5.32.975-4.069 0-7.309-1.182-9.72-3.547l2.944-3.264c1.88 1.656 4.091 2.483 6.633 2.483 1.242 0 2.235-.266 2.98-.798.745-.532 1.118-1.27 1.118-2.217 0-.603-.136-1.105-.408-1.508-.272-.413-.728-.786-1.366-1.117-.627-.331-1.526-.674-2.696-1.029-1.928-.59-3.47-1.241-4.63-1.95-1.158-.71-2.004-1.526-2.536-2.448-.52-.923-.78-2.017-.78-3.282 0-1.454.408-2.72 1.223-3.796.828-1.088 1.946-1.915 3.353-2.483 1.407-.567 2.968-.851 4.682-.851 3.654 0 6.593 1.058 8.816 3.175l-2.75 3.157a8.864 8.864 0 0 0-2.678-1.543 8.524 8.524 0 0 0-2.927-.514c-1.135 0-2.033.212-2.695.638-.663.414-.994 1.005-.994 1.774 0 .532.148.975.444 1.33.295.343.786.668 1.472.976.697.295 1.738.662 3.122 1.1 1.655.508 3.015 1.093 4.08 1.755 1.063.65 1.88 1.478 2.447 2.483.58.994.869 2.223.869 3.69Z"
                fill="#fff"
            />
            <defs>
                <linearGradient
                    id="a"
                    x1={39.811}
                    y1={86.108}
                    x2={147.356}
                    y2={-12.61}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#05454E" />
                    <stop offset={1} stopColor="#E7EDFF" />
                </linearGradient>
                <linearGradient
                    id="b"
                    x1={6.485}
                    y1={82.505}
                    x2={116.552}
                    y2={-6.665}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0FA3A4" />
                    <stop offset={1} stopColor="#3BDB52" />
                </linearGradient>
                <linearGradient
                    id="c"
                    x1={0}
                    y1={11.796}
                    x2={14.152}
                    y2={11.796}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#12C3C4" />
                    <stop offset={1} stopColor="#58BD67" />
                </linearGradient>
                <linearGradient
                    id="d"
                    x1={103.221}
                    y1={76.92}
                    x2={109.313}
                    y2={61.314}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#58BD67" />
                    <stop offset={1} stopColor="#12C3C4" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default function Logo() {
    return (
        <a href="/" aria-label="Home">
            {/* <img
                    className="block h-6 w-auto"
                    src="/images/logo.svg"
                    alt="Logo"
                /> */}
            <LogoIcon className="block h-6 sm:h-7 w-auto" alt="Logo" />
        </a>
    );
}