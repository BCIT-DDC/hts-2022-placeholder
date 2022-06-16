require('dotenv').config();

module.exports = {
    siteMetadata: {
        title: `HtS 2022 Placeholder`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        `gatsby-plugin-postcss`,
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint:
                    'https://gmail.us14.list-manage.com/subscribe/post?u=0cb90faee21d80805bedb1eac&id=6310730a21',
                timeout: 3500,
            },
        },
    ],
};
//
