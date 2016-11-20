class Engine{
    constructor(public horsePower: number, public engineType: string){}
}
class CarAuto {
    private _engine: Engine;
    constructor(engine: Engine){}
    get engine(): Engine{
        return this._engine;
    }
    set engine(value: Engine){
        if (value === undefined) throw 'Please supply an engine';
        this._engine = value;
    }
    start(){
        alert('Car engine started '+ this._engine.engineType);
    }
}