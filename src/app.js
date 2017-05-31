import './css/style.scss';
require('font-awesome-webpack');

import config from './config';
const constants = config.get().constants;

import angular from 'angular';
// import Angular2To1 from 'angular2to1';
import AngularUiRouter from 'angular-ui-router';
import AngularAnimate from 'angular-animate';
import AngularSanitize from 'angular-sanitize';
import AngularBootstrap from 'angular-ui-bootstrap';
/*eslint-disable */
import LocalStorageModule from 'angular-local-storage';
/*eslint-enable */
import routes from './routes';
import { AppComponent } from './app.component';

import Home from './components/home';
import SocketService from './services/socket';

angular.module(constants.APP_NAME, [
  // framework wide components
  AngularUiRouter,
  AngularAnimate,
  AngularSanitize,
  AngularBootstrap,

  // services
  'LocalStorageModule',
  SocketService,

  // ui-components
  Home
])
.config(routes)
.component(AppComponent.selector, AppComponent);

angular.element(document).ready(() => {
  angular.bootstrap(document, [constants.APP_NAME]);
});
