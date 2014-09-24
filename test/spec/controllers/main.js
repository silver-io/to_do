'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('toDoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('it is empty when initiated', function () {
    expect(scope.todos.length).toBe(0);
  });

  it('adds items to the list', function() {
    scope.todo = 'Test 1';
    scope.addTodo();
    expect(scope.todos.length).toBe(1);
  });

  it('adds then removes an item from the list', function () {
    scope.todo = 'Test 1';
    scope.addTodo();
    scope.removeTodo(0);
    expect(scope.todos.length).toBe(0);
  });

});
