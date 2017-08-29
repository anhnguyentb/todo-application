import angular from 'angular';
import imports from './../../imports';
import * as CONFIG from './../../config.json';

import TodoForm from './../todo-form/todo-form';

const MODULE_NAME = `${CONFIG.MODULE_NAME}.home`;
angular
    .module(MODULE_NAME, [imports.router, TodoForm])
    .config(['$stateProvider', function($stateProvider) {

        $stateProvider.state('app.home', {
            url: '/',
            template: require('./home.html'),
            controller: 'HomeController'
        });
    }])
    .controller('HomeController', HomeController);

HomeController.$inject = ['$scope'];
function HomeController($scope) {

}

export default MODULE_NAME;