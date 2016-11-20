/// <reference path="../typings/knockout.d.ts"/>
var demo_03;
(function (demo_03) {
    var name = ko.observable('Serg');
    var id = ko.observable(1);
    var guy = {
        id: id,
        fullName: name
    };
    var value = guy.fullName();
    console.log(value);
})(demo_03 || (demo_03 = {}));
