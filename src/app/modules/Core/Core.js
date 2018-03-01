import AppModule from '../../lib/AppModule';

import './Core.scss';

export default class Core extends AppModule {
    constructor() {
        super();

        // Ref to this
        const self = this;

        // on DOMContentLoaded, publish DOMReady
        document.addEventListener('DOMContentLoaded', () => self.publish('DOMReady'));
    }

    DOMReady() {
        Array.from(document.querySelectorAll('button[data-spin]')).map(function (el) {
            el.addEventListener('click', function () {
                let spinClass = this.dataset.spin;
                Array.from(document.querySelectorAll('.wheel')).map(function (wheel) {
                    wheel.classList.remove(...['spin', 'fast', 'faster', 'superfast', 'ultrafast', 'megafast', 'wtfast']);
                    if (spinClass) {
                        wheel.classList.add(...['spin', spinClass]);
                    }
                });
            });
        });
    }
}
