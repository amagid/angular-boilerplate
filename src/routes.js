import configuration from './config';
const config = configuration.get();

/* @ngInject */
function setUpRoutes ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {

  localStorageServiceProvider.setPrefix(config.constants.APP_NAME);

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });

  $urlRouterProvider.otherwise('/');
}

export default setUpRoutes;