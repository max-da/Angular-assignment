export class Movie{
    id:number
    name:string
    description:string
    price:number
    imageUrl:string
    productCategory:[{categoryId:number}]
    amount:number

    constructor(id:number, name:string, description:string,price:number,imageUrl:string,productCategory:[{categoryId:number}],amount:number){
        this.id = id,
        this.name = name,
        this.description = description,
        this.price = price,
        this.imageUrl = imageUrl
        this.productCategory = productCategory;
        this.amount = amount;
    }
}