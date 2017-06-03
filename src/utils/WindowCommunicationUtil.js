export default class WindowCommunicationUtil {
    constructor({ receiverOrigin }) {
        this.receiverOrigin = receiverOrigin;
    }

    send(data) {
        /* eslint-disable more/no-window */
        window.opener.postMessage(data, this.receiverOrigin);
        /* eslint-enable more/no-window */
    }
}
