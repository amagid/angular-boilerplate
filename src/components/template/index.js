import angular from 'angular';

import {
    Component
} from './component';


export * from './component';

export default angular.module('template', [])
    .component(Component.selector, Component)
    .name;