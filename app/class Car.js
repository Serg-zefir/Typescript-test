var Engine = (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    return Engine;
}());
var CarAuto = (function () {
    function CarAuto(engine) {
    }
    Object.defineProperty(CarAuto.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value === undefined)
                throw 'Please supply an engine';
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    CarAuto.prototype.start = function () {
        alert('Car engine started ' + this._engine.engineType);
    };
    return CarAuto;
}());
