type Pokemon = {
    name:string
    gender:String
    height:Number
    weight:Number
    Location_area_encountters:String
    moves:move[]
    type:TypePokemon|TypePokemon[]
    help_item?:held_item[]
}
type move ={
    name:String
    effect:String
}
type held_item={
    name:String
    stat:{
        armor:Number
        damage:Number
        hp:Number
        speed:Number
    
    }
    
}


enum TypePokemon {
    Fire, Flying, Grass
}

const Pokemon1:Pokemon={
    name:"Charlizard",
    gender:"female",
    height:200,
    weight:200,
    Location_area_encountters:"forest",
    moves:[{
        name:"flying",
        effect:"cannot take damage from ground"
    }
],
type:[TypePokemon.Fire,TypePokemon.Flying]
}

const Pokemon2:Pokemon={
    name:"babalsor",
    gender:"female",
    height:200,
    weight:200,
    Location_area_encountters:"forest",
    moves:[{
        name:"kick",
        effect:"deal damage 50"
    }
],
type: TypePokemon.Grass,
help_item:[
    {
        name:"glove",
       stat:{ 
        armor:20,
        damage:10,
        hp:200,
        speed:200
    }
}
]
}


console.log(Pokemon1);
console.log(Pokemon2);