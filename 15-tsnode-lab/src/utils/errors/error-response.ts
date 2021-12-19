export class ErrorResponse extends Error {
    constructor(public status: number, public error: string){
        super(error)
    }
}