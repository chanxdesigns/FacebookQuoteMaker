var FBQM = angular.module('Controllers', ['Services']);

FBQM.controller('TitleCtrl', TitleCtrlFunc);
TitleCtrlFunc.$inject = ['$scope','ModifyTitle'];
function TitleCtrlFunc ($scope, ModifyTitle) {
    $scope.title = ModifyTitle;
}

FBQM.controller('ShowHeaderCtrl', ShowHeaderCtrlFunc);
ShowHeaderCtrlFunc.$inject = ['$scope','ModifyTitle'];
function ShowHeaderCtrlFunc ($scope, ModifyTitle) {
    ModifyTitle.setName('Now Setting Header!');
    $scope.header = "Bro I need Help";
}