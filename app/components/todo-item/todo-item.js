import angular from 'angular';
import * as CONFIG from './../../config.json';
import template from './todo-item.html';

const MODULE_NAME = `${CONFIG.MODULE_NAME}.components.todo-item`;
angular
    .module(MODULE_NAME, [])
    .directive('todoItem', function() {
        return {
            restrict: 'E',
            scope: {},
            bindToController: {
                item: '=',
                idx: '=',
                delete: '&',
                onUpdate: '&'
            },
            controllerAs: 'ctrl',
            controller,
            template
        }
    });

controller.$inject = ['$scope'];
function controller($scope) {

    $scope.$watch('ctrl.item.checked', (v) => {
        this.onUpdate();
    })
}

export default MODULE_NAME;