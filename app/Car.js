var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.start = function () {
        alert('Engine started:' + this.engine);
    };
    Car.prototype.run = function () {
        alert('Car ' + this.engine + ' run 5 km.');
    };
    Car.prototype.stop = function () {
        alert('Engine stopped:' + this.engine);
    };
    return Car;
}());
window.onload = function () {
    var car1 = new Car('V8');
    car1.start();
    car1.run();
    car1.stop();
};
