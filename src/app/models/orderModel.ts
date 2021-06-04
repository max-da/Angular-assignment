import { Movie } from "./models"
import { orderRow } from "./orderRowsModel"

export class Order{

    companyId:number
    created:Date
    createdBy:string
    paymentMethod:string
    totalPrice:number
    status:number
    orderRows:orderRow[]


    constructor( companyId:number, created:any, createdBy:string,paymentMethod:string,totalPrice:number,status:number,orderRows:orderRow[]){ //{id:number,title:string}
    
        this.companyId = companyId,
        this.created = created,
        this.createdBy = createdBy,
        this.paymentMethod = paymentMethod,
     
        this.totalPrice = totalPrice,
        this.status = status,
        this.orderRows = orderRows
    
    }
}
