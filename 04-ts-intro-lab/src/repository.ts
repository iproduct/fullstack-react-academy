import { IdGenerator } from './id-generator.js';
import { UserRepository } from './user-repository.js';
import { User, Author, Reader, Admin, Role } from './user.js';

export type IdType = number

export interface Indentifiable<K> {
    id: K | undefined
}

export interface Repository<K, V> {
    findAll(): V[];
    findById(id: K): V | undefined;
    create(item: V): V;
    update(item: V): V;
    deleteById(id: K): V | undefined;
    count(): number;
}

export interface UserRepository2 extends Repository<IdType, User> {
    findByEmail(email: string): User | undefined;
}

export class InMemoryRepository<K, V extends Indentifiable<K>> implements Repository<K, V> {
    private entities = new Map<K, V>()
    private sequence: Iterator<K>
    constructor(idGen: IdGenerator<K>, sampleValues?: V[]) {
        this.sequence = idGen[Symbol.iterator]()
        if (sampleValues) {
            sampleValues.forEach(val => this.create(val))
        }
    }
    findAll(): V[] {
        return Array.from(this.entities.values());
    }
    findById(id: K): V | undefined {
        return this.entities.get(id);
    }
    create(item: V): V {
        item.id = this.sequence.next().value;
        this.entities.set(item.id!, item);
        return item;
    }
    update(item: V): V {
        if (!item.id) {
            throw `Item ID should be defined.`;
        }
        this.entities.set(item.id, item);
        return item;
    }
    deleteById(id: K): V | undefined {
        const deleted = this.findById(id);
        if (deleted) {
            this.entities.delete(id);
        }
        return deleted;
    }
    count(): number {
        return this.entities.size;
    }

}

export class InMemoryUserRepository extends InMemoryRepository<IdType, User> implements UserRepository2 {
    findByEmail(email: string): User | undefined {
        return this.findAll().find(u => u.email === email);
    }

}