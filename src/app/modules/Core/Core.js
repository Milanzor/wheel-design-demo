import AppModule from '../../lib/AppModule';

import './Core.scss';

export default class Core extends AppModule {

    constructor() {
        super();

        // Ref to this
        const self = this;

        this.speeds = [
            'STOP',
            100,
            200,
            400,
            600,
            800,
            1000,
        ];

        // on DOMContentLoaded, publish DOMReady
        document.addEventListener('DOMContentLoaded', () => self.publish('DOMReady'));
    }

    DOMReady() {

        this.makeButtons();

        const self = this;

        Array.from(document.querySelectorAll('button[data-spin]')).map(function (el) {

            el.addEventListener('click', function () {
                let spinClass = this.dataset.spin;

                Array.from(document.querySelectorAll('.wheel')).map(function (wheel) {

                    wheel.classList.remove(...self.speeds.map((spd) => {
                        return `SPEED-${spd}-RPM`
                    }));

                    if (spinClass) {
                        wheel.classList.add(...['spin', spinClass]);
                    }

                });
            });
        });
    }

    makeButtons() {

        this.speeds.map(function (speed) {
            let btn = document.createElement('button');
            btn.classList.add('btn', 'btn-primary');
            btn.innerHTML = !isNaN(speed) ? `${speed} RPM` : 'STOP';
            btn.dataset.spin = `SPEED-${speed}-RPM`;

            document.querySelector('.controls').append(btn)
        });
    }
}
