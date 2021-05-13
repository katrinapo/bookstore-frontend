export class Book {
    constructor (
    public title: string,
    public author: string,
    public genre: string,
    public cost: number,
    public quantity: number,
    public image?: string,
    public bookId?: number
    ) {}
}