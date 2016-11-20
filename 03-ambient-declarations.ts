/// <reference path="typings/knockout.d.ts"/>
declare var ko: KnockoutStatic;

module demo_03 {
    var name = ko.observable('Serg');
    var id = ko.observable(1);
    var guy = {
        id: id,
        fullName: name
    };
    var value: string = guy.fullName();
    console.log(value);
}