import { Movie } from "./models"
import { orderRow } from "./orderRowsModel"

export class Order{

    companyId:number
    created:Date
    createdBy:string
    paymentMethod:string
    totalPrice:number
    status:number
    orderRows:any


    constructor( companyId:number, created:any, createdBy:string,paymentMethod:string,totalPrice:number,status:number,orderRows:any){ //{id:number,title:string}
    
        this.companyId = companyId,
        this.created = created,
        this.createdBy = createdBy,
        this.paymentMethod = paymentMethod,
     
        this.totalPrice = totalPrice,
        this.status = status,
        this.orderRows = orderRows
    
    }
}
//}{"id":4327,"productId":77,"product":null,"amount":3,"orderId":3616},