import {User, Author, Reader, Admin, Role} from './user.js';

export interface UserRepository {
    findAll(): User[];
    findById(id: number): User | undefined;
    create(user: User): User;
    update(user: User): User;
    deleteById(id: number): User | undefined;
    count(): number;
}

export class MockUserRepository implements UserRepository {
    static idSequence: number = 0;
    private entities = new Map<number, User>()
    findAll(): User[] {
        return Array.from(this.entities.values());
    }
    findById(id: number): User | undefined {
        return this.entities.get(id);
    }
    create(user: User): User {
        user.id = ++ MockUserRepository.idSequence;
        this.entities.set(user.id, user);
        return user;
    }
    update(user: User): User {
        if(!user.id) {
            throw `User ID should be defined.`;
        }
        this.entities.set(user.id, user);
        return user;
    }
    deleteById(id: number): User | undefined {
        const deleted = this.findById(id);
        if(deleted) {
            this.entities.delete(id);
        }
        return deleted;
    }
    count(): number {
        return this.entities.size;
    }

}