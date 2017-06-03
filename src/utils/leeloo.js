/* eslint-disable */
export default function() {
    (function(d, s){
        var js = d.createElement(s);
        window.WepsterInit = {
            service_url: 'https://app.leeloo.ai',
            short_url: 'https://wep.wf'};
        js.src = 'https://app.leeloo.ai/init.js';
        document.getElementsByTagName('head')[0].appendChild(js);
    }(document, 'script'));
    !window.WepsterElements ? window.WepsterElements = ['caoLd'] :  window.WepsterElements.push('caoLd');
}
/* eslint-enable */
