class Personn{
    name;
    height;
    weight;
    constructor(name,height,weight){
        this.name=name
        this.height=height
        this.weight=weight
    }

}

class Man extends Personn{
    gender;
    constructor(name,height,weight,gender){
        super(name,height,weight)
        this.gender=gender
    }
    get Info(){
        return (`Name:${this.name},Height:${this.height},Weight:${this.weight},Gender:${this.gender}`)
    }
}

class Woman extends Personn{
    gender;
    constructor(name,height,weight,gender){
        super(name,height,weight)
        this.gender=gender
    }
    get Info(){
       return (`Name:${this.name},Height:${this.height},Weight:${this.weight},Gender:${this.gender}`)
    }
}


const man=new Man("Binit","6","80","Male")
console.log(man.Info);

const woman=new Woman("Nibida","5'5","40","female")
console.log(woman.Info);

 