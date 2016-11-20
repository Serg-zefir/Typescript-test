var user = {
    name: 'Serg',
    age: 30,
    sex: 'male',
    greet: function (msg) {
        return msg + ', ' + this.name;
    }
};
console.info("Name: " + user.name, ", age: " + user.age, ", Sex: " + user.sex);
console.log(user.greet('Good day'));
console.dir(user);
console.trace(user);
console.warn(user);
