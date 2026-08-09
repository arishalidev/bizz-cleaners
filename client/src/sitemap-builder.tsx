import pkg from "@snaddyvitch-dispenser/react-router-sitemap"

const Sitemap = (pkg as unknown as { default: typeof pkg }).default;

const routes = [
    { path: '/' },
    { path: '/about' },
    { path: '/services' },
    { path: '/delivery' },
    { path: '/contact' },
    { path: '/dry-cleaning' },
    { path: '/wash-and-fold' },
    { path: '/leather' },
    { path: '/wedding' },
    { path: '/household' },
    { path: '/shoes' },
    { path: '/laundry-shirts' },
    { path: '/indian-garments' },
];

(
    new Sitemap(routes)
        .build('https://www.bizzclean.com/')
        .save('../public/sitemap.xml')
);
