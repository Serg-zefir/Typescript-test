var demo_02;
(function (demo_02) {
    var person;
    person = 'Serg';
    console.log(person.substring(1, 4));
    person = {
        name: 'zefir',
        age: 25
    };
    console.log(person.name.substring(1, 4));
})(demo_02 || (demo_02 = {}));
