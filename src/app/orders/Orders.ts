import { BookUser } from "../user";


export class Orders{

    constructor(public orderId:number, public totalCost:number, public isapproved: boolean, public bookuser : BookUser){
    }
}
