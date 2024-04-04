interface  detailAnimal{
    name:String
    fly:boolean
    gender:gender
    leg:Number
    swim:boolean
}
enum gender{
     male,female

    }

const Animal1: detailAnimal= {
    name:"tiger",
    fly:false,
    gender:gender.male,
    leg:4,
    swim:true
}
console.log(Animal1);