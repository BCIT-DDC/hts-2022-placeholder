import React from 'react';
import { Helmet } from 'react-helmet';

import NavBar from './NavBar';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

const siteUrl = process.env.SITE_URL || `https://www.bcit-hts.com`;

export default function HTS() {
    return (
        <>
            <Helmet htmlAttributes={{ lang: 'en' }} />
            {/* TODO: Update relevant SEO-related content below */}
            <Helmet>
                <base href={siteUrl} />
                <meta name="referrer" content="origin" />
                <link rel="canonical" href={siteUrl} />

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />

                <title>Hack to School (HTS) 2023</title>

                <meta name="description" content="" />
                <meta
                    name="keyword"
                    content="hackathon, design, tech, bcit, ubc, sfu, vancouver, british columbia"
                />

                <meta property="og:locale" content="en_CA" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:site_name"
                    content="Hack to School (HTS) 2023"
                />
                <meta property="og:url" content={siteUrl} />
                <meta property="og:title" content="Hack to School (HTS) 2023" />
                <meta
                    property="og:description"
                    content="Hack to School (HTS) 2023"
                />

                <meta
                    property="og:image"
                    content={`${siteUrl}/images/hero.jpeg`}
                />
                <meta
                    property="og:image:secure_url"
                    content={`${siteUrl}/images/hero.jpeg`}
                />
                {/* TODO: Edit Hero image dimensions */}
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="1442.56" />
                <meta property="og:image:height" content="1000.8" />
                <meta
                    property="og:image:alt"
                    content="Hack to School (HTS) 2023"
                />

                <meta
                    name="twitter:image"
                    content={`${siteUrl}/images/hero.jpeg`}
                />
                <meta name="twitter:image:width" content="1442.56" />
                <meta name="twitter:image:height" content="1000.8" />
                <meta name="twitter:image:alt" content="" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Hack to School (HTS) 2023"
                />
                <meta
                    name="twitter:description"
                    content="Hack to School (HTS) 2023"
                />
            </Helmet>
            <Helmet>
                <body className="hts-container font-body h-full text-white font-bold  " />
            </Helmet>
            <div className="flex items-center justify-center main-container h-screen bg-cover bg-hero-bg ">
                {/* <header className="header-container sticky top-0 z-40">
                    <NavBar />
                </header> */}
                <div className="flex w-5/6 w-screen h-5/6">
                    <main className="w-5/6">
                        <MainContent />
                    </main>
                    <aside className="">
                        <Sidebar />
                    </aside>
                </div>
                {/* <footer><Footer /></footer> */}
            </div>
        </>
    );
}
