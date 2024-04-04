type Profile = {
    name:string
    age:Number
    gender:genderr
    hobbie:hobbie|hobbie[]
    job?:string
}
enum genderr{
    male,female
}
type hobbie = 'watch tv' | 'Swimming' | 'Play game';

const People1:Profile={
    name: "Peter",
    age:20,
    gender:genderr.male,
    hobbie:["watch tv", "Swimming"]
}

const People2: Profile ={
    name:"alex",
    age:18,
    gender:genderr.female,
    hobbie:"Play game",
    job:"doctor"
}

console.log(People1);
console.log(People2);