import { runningOnLocalhost, gaIdentifier } from '../config';

export function initialize() {
    if (runningOnLocalhost) {
        ga('create', gaIdentifier, {
            'cookieDomain': 'none'
        });
    } else {
        ga('create', gaIdentifier, 'auto');

        ga('send', 'pageview');
    }
}

export function sendEvent(category, action, label, value) {
    ga('send', {
        hitType       : 'event',
        eventCategory : category,
        eventAction   : action,
        eventLabel    : label,
        eventValue    : value
    });
}

export default { initialize, sendEvent };
