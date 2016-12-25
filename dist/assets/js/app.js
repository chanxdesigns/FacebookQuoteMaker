angular.module('FacebookQuoteMaker',['TitleService'])

    .controller('TitleCtrl', TitleCtrlFunc)
    .controller('ShowHeaderCtrl', ShowHeaderCtrlFunc);

    TitleCtrlFunc.$inject = ['$scope','ModifyTitle'];
    function TitleCtrlFunc ($scope, ModifyTitle) {
        $scope.title = ModifyTitle.getName();
    }

    ShowHeaderCtrlFunc.$inject = ['$scope','ModifyTitle'];
    function ShowHeaderCtrlFunc ($scope, ModifyTitle) {
        ModifyTitle.setName('Now Setting Header!');
        $scope.header = "Neah I See Chanx!";
    }