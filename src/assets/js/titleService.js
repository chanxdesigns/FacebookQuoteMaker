var TitleService = angular.module('TitleService',[]);

TitleService.service('ModifyTitle', function () {
    this.name = "Facebook Quote Maker";
    this.getName = function () {
        return this.name;
    };

    this.setName = function (title) {
        this.name = title;
    };
});