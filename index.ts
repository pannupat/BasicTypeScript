type type1 = string | number
const someValue: type1 = "pack"

interface name{
    fname:string
    lname:string
}
interface name {
    age:number
}
interface  name{
    hobie:string
}
interface  name{
    tel?:number
}

const person: name = {
    fname:"peter",
    lname: "parker",
    age:21,
    hobie:"palyedgame"
}

