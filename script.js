class Ninja {
    constructor(nombre){
        this.nombre=nombre;
        this.salud=10;
        this.velocidad=3;
        this.fuerza=3;
    }
    sayName() {
        console.log(this.nombre);
    }
    showStats (){
        console.log(`Nombre ${this.nombre}, salud actual es de ${this.salud}HP con una fuerza de ${this.fuerza} y una velocidad de ${this.velocidad}`)
    }
    drinkSake (){
        this.salud+=10;
        console.log(`Aumentado de salud +10:  ${this.salud}HP`);
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();