var FBQM = angular.module('Services',[]);

FBQM.service('ModifyTitle', function () {
    this.name = "Facebook Quote Maker";
    this.getName = function () {
        return this.name;
    };

    this.setName = function (title) {
        this.name = title;
        console.log(this.name);
    };
});