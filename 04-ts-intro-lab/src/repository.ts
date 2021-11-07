import { UserRepository } from './user-repository';
import {User, Author, Reader, Admin, Role} from './user.js';

type IdType = number

export interface Indentifiable<K> {
    id: K
}

export interface Repository<K, V> {
    findAll(): V[];
    findById(id: K): V | undefined;
    create(user: V): V;
    update(user: V): V;
    deleteById(id: K): V | undefined;
    count(): number;
}

export interface UserRepository2 extends Repository<IdType, User>{
    findByEmail(email: string): User | undefined;
}



export class MockRepository<K, V> implements Repository<K,V> {
    static idSequence: number = 0;
    private entities = new Map<number, User>()
    // findAll(): User[] {
    //     return Array.from(this.entities.values());
    // }
    // findById(id: number): User | undefined {
    //     return this.entities.get(id);
    // }
    // findByEmail(email: string): User | undefined {
    //     return Array.from(this.entities.values()).find(u => u.email === email)
    // }
    // create(user: User): User {
    //     user.id = ++ MockUserRepository.idSequence;
    //     this.entities.set(user.id, user);
    //     return user;
    // }
    // update(user: User): User {
    //     if(!user.id) {
    //         throw `User ID should be defined.`;
    //     }
    //     this.entities.set(user.id, user);
    //     return user;
    // }
    // deleteById(id: number): User | undefined {
    //     const deleted = this.findById(id);
    //     if(deleted) {
    //         this.entities.delete(id);
    //     }
    //     return deleted;
    // }
    // count(): number {
    //     return this.entities.size;
    // }

}