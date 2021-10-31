
export interface Person {
    id: number | undefined;
    firstName: string;
    lastName: string;
    readonly salutation: string;
    getSalutation(): string;
}

export interface User extends Person {
    email: string;
    password: string;
    roles: Role[];     // Array<Role>;
    contact?: Contact;
}

export enum Role {
    AUTHOR = 1, READER, ADMIN
}

export interface Contact {
    country: string;
    city?: string;
    address?: string;
    phone?: string;
}

export class UserImpl implements User {
    public id: number | undefined;
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public roles: Role[],
        public contact?: Contact,
    ) { }
    get salutation() {
        return `${this.firstName} ${this.lastName} in roles: ${this.roles.map(role => Role[role]).join(', ')
            }`;
    }
    getSalutation(): string {
        return `${this.id ? this.id : ''}: ${this.salutation} with credentials [username: ${this.email}, password: ${this.password}]`;
    }
}

export class Author extends UserImpl {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public roles: Role[] = [Role.AUTHOR],
        public contact?: Contact,
    ) {
        super(
            firstName,
            lastName,
            email,
            password,
            roles,
            contact)
    }
    getSalutation(): string {
        return `AUTHOR(${super.getSalutation()})`;
    }
}

export class Reader extends UserImpl {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public roles: Role[] = [Role.READER],
        public contact?: Contact,
    ) {
        super(
            firstName,
            lastName,
            email,
            password,
            roles,
            contact)
    }
    getSalutation(): string {
        return `READER(${super.getSalutation()})`;
    }
}

export class Admin extends UserImpl {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public roles: Role[] = [Role.ADMIN],
        public contact?: Contact,
    ) {
        super(
            firstName,
            lastName,
            email,
            password,
            roles,
            contact)
    }
    getSalutation(): string {
        return `ADMIN(${super.getSalutation()})`;
    }
}