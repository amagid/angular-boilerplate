import './style.scss';
import structure from './structure.html';

class Ctrl {
    /* @ngInject */
    constructor() {

    }
}

export const Component = {
    templateUrl: structure,
    selector: 'template',
    bindings: {},
    controller: Ctrl
};