import config from '../config';

class SocketService {
    constructor() {
        this.socket = io(config.get().urls.backend);

        this.attachEventHandlers();
    }

    attachEventHandlers() {
        this.socket.on('connected', (message) => {
            console.log(message);
        });

        const GIoutput = $('.output_container.getInfo');

        this.socket.on('getInfoProgress', (data) => {
            GIoutput.append($(`<p>${data.message} (${data.percent}%)</p>`));
        });

        this.socket.on('briefNonprofits', (nonprofits) => {
            this.briefNonprofits = nonprofits;
            GIoutput.append($('<div class="progress_separator"></div>'));
            let outputFrag = $('<div class="briefNonprofits"></div>');
            console.log(nonprofits);
            for (let i = 0; i < nonprofits.length; i++) {
                outputFrag.append($(`<div class="brief_nonprofit" data-index="${i}" onclick="getMoreDetails(event)">${JSON.stringify(nonprofits[i])}</div>`));
            }
            GIoutput.append(outputFrag);
        });

        this.socket.on('nonprofitDetails', (details) => {
            GIoutput.append($(`<div class="fullNonprofit">${JSON.stringify(details)}</div>`));
        });
    }

    getSocket() {
        return this.socket;
    }
}

export default angular.module('SocketService', []).service('SocketService', SocketService).name;