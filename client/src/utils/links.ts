import ReactGA from 'react-ga4';

export const apiBase = import.meta.env.VITE_SERVER_URL ?? '';

export const linkToPortal = () => {
    window.open("https://www.google.com", "_blank", "noopener,noreferrer")

    ReactGA.event({
        category: 'User Interaction',
        action: 'Clicked Link',
        label: 'Link To Schedule Pickup',
    });

}
export const linkToDirections = () => {
    window.open("https://www.google.com/maps/dir/?api=1&destination=Bizz+Cleaners,+2201+Long+Prairie+Rd+#103,+Flower+Mound,+TX+75022", "_blank", "noopener,noreferrer")

    ReactGA.event({
        category: 'User Interaction',
        action: 'Clicked Link',
        label: 'Link To Directions',
    });
}
export const linkToCall = () => {
    window.location.href = "tel:+19723551807";

    ReactGA.event({
        category: 'User Interaction',
        action: 'Clicked Link',
        label: 'Link To Call',
    });
}
export const linkToAppleApp = () => {
    window.open("https://apps.apple.com/us/app/bizz-cleaners/id1640653249")

    ReactGA.event({
        category: 'User Interaction',
        action: 'Clicked Link',
        label: 'Link To Download Apple App',
    });
}
export const linkToGoogleApp = () => {
    window.open("https://play.google.com/store/apps/details?id=com.cleancloudapp.bizzcleaners2&hl=en_US")

    ReactGA.event({
        category: 'User Interaction',
        action: 'Clicked Link',
        label: 'Link To Google App',
    });
}
