import './home.scss';
import template from './home.html';

class HomeCtrl {
    /* @ngInject */
    constructor(SocketService, $scope) {
        $scope.socket = SocketService.getSocket();
    }

    getMoreDetails(event) {
        const index = event.target.dataset.index;
//        GIoutput.append($(`<p>Getting deets for ${briefNonprofits[index].displayName || briefNonprofits[index].organizationName || 'Unlabeled Nonprofit'}...</p><br/><div class="progress_separator"></div>`));
//        socket.emit('getNonprofitDetails', index);
    }
}

export const HomeComponent = {
    templateUrl: template,
    selector: 'home',
    bindings: {},
    controller: HomeCtrl
};