import angular from 'angular';
import SocketService from '../../services/socket';

import {
    HomeComponent
} from './home.component';


export * from './home.component';

export default angular.module('home', [
        SocketService
    ])
    .component(HomeComponent.selector, HomeComponent)
    .name;