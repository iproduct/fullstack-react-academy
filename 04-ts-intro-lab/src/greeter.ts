
import { MockUserRepository } from './user-repository.js';
import {User, Author, Reader, Admin, Role} from './user.js';

function greeter(users: User[]): string {
   return users.map(user => `Hi ${user.getSalutation()}${user.contact? ', address: ' + JSON.stringify(user.contact): ''}`)
   .join('<br>');
}

const tarayn = new Admin('Trayan', 'Iliev', 'tiliev@gamil.com', 'tiliev', [Role.AUTHOR, Role.ADMIN],
{
    country: 'Bulgaria', address: 'Sofia 1000', phone: '+359 885123456'
});

const georgi = new Author('Georgi', 'Petrov', 'gpetrov@gamil.com', 'georgi', [Role.AUTHOR, Role.READER],
{
    country: 'Bulgaria', address: 'Sofia 1000', phone: '+359 881233456'
});

const maria = new Admin('Maria', 'Petrova', 'mariap@gamil.com', 'maria');

const userRepo = new MockUserRepository();
userRepo.create(tarayn)
userRepo.create(georgi)
userRepo.create(maria)

document.getElementById('results')!.innerHTML = greeter(userRepo.findAll());