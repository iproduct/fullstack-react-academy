
export enum TodoStatus {
    ACTIVE = 1, COMPLETED, CANCELED
}

export class Todo {
    constructor(
        public id: number,
        public title: string,
        public status = TodoStatus.ACTIVE,
    ){}
}
