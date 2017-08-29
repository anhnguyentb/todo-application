import angular from 'angular';
import imports from './imports';

import '../styles/app.scss';
import * as CONFIG from './config.json';

//Import components
import Home from './components/home/home';

angular
    .module(CONFIG.MODULE_NAME, [
        imports.router,
        Home
    ])
    .config(addMainState)
    .config(configureApp)
    .run(runApp);

addMainState.$inject = ['$stateProvider'];
function addMainState($stateProvider) {

    $stateProvider.state('app', {
        abstract: true,
        views: {
            'app-body': {
                template: `<div ui-view></div>`
            }
        }
    });
}

configureApp.$inject = ['$urlRouterProvider', '$locationProvider'];
function configureApp($urlRouterProvider, $locationProvider) {
    
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true).hashPrefix('');
}

function runApp() {
}