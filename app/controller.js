'use strict';

angular.module('todoApp.controller', [])
    .controller('todocontroller', ["$scope", "$filter", function($scope, $filter) {
        $scope.newTask = "";

        $scope.pendingCount = 3;

        $scope.taskList = [
            { description: "Buy Tickets", done: false },
            { description: "Make Reservation", done: false },
            { description: "Have Fun", done: false }
        ];

        $scope.addTodo = function() {
            $scope.taskList.push({ description: $scope.newTask, done: false });
            $scope.newTask = "";
        };

        $scope.deleteTodo = function(index) {
            $scope.taskList.splice(index, 1);
        };

        $scope.$watch('taskList', function() {
            $scope.pendingCount = $filter('filter')($scope.taskList, { done: false }).length;
        }, true);

        $scope.clearCompleted = function() {
            $scope.taskList = $filter('filter')($scope.taskList, { done: false });
        };

    }]);
