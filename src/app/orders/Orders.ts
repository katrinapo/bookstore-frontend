import { Book } from "../book";

export class Orders{
    constructor(public orderId:number, public totalCost:number, public isapproved: boolean, public date:Date, books: Book[]){
    }
}
