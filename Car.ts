class Car {
    engine: string;
    constructor (engine: string){
        this.engine= engine;
    }
    start(){
        alert('Engine started:'+ this.engine);
    }
    run(){
        alert('Car '+this.engine+' run 5 km.');
    }
    stop(){
        alert('Engine stopped:'+ this.engine);
    }
}

window.onload = function() {
    var car =new Car('V8');
    car.start();
    car.stop();
};