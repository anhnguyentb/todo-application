import angular from 'angular';
import * as CONFIG from './../../config.json';
import template from './todo-form.html';

import TodoItem from './../todo-item/todo-item';

const MODULE_NAME = `${CONFIG.MODULE_NAME}.components.todo-form`;
angular
    .module(MODULE_NAME, [TodoItem])
    .directive('todoForm', function() {
        return {
            restrict: 'E',
            scope: {},
            controllerAs: 'ctrl',
            controller,
            template
        }
    });

controller.$inject = ['$scope'];
function controller($scope) {

    const ctrl = this;

    ctrl.itemTitle = null;
    ctrl.items = [];
    ctrl.allChecked = false;

    ctrl.addItem = () => {
        if(!this.itemTitle || this.itemTitle.trim() === '') return false;

        this.items.unshift({
            id: ctrl.items.length,
            title: this.itemTitle
        });

        this.itemTitle = null;
    };

    ctrl.selectAll = () => {

        this.items = this.items.map((v) => {
            v.checked = !this.allChecked;
            return v;
        })
    };

    ctrl.deleteSelected = () => {

        this.items = this.items.filter((v) => !v.checked);
    };

    ctrl.deleteItem = (item) => {

        this.items = this.items.filter((v) => v.id !== item.id);
    };

    ctrl.itemChecked = () => {

        this.allChecked = this.items.filter((v) => !v.checked).length === 0;
    }
}

export default MODULE_NAME;