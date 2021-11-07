import { InMemoryUserRepository, UserRepository2 } from './repository.js';
import { LoginComponent } from './login-component.js';
import { LoginController, DemoLoginController } from './controller.js';

// import { MockUserRepository, UserRepository } from './user-repository.js';
import {User, Author, Reader, Admin, Role} from './user.js';
import { NumberIdGenerator } from './id-generator.js';

function greeter(users: User[]): string {
   return users.map(user => `Hi ${user.getSalutation()}${user.contact? ', address: ' + JSON.stringify(user.contact): ''}`)
   .join('<br>');
}

const tarayn = new Admin('Trayan', 'Iliev', 'tiliev@gmail.com', 'tiliev', [Role.AUTHOR, Role.ADMIN],
{
    country: 'Bulgaria', address: 'Sofia 1000', phone: '+359 885123456'
});

const georgi = new Author('Georgi', 'Petrov', 'gpetrov@gamil.com', 'georgi', [Role.AUTHOR, Role.READER],
{
    country: 'Bulgaria', address: 'Sofia 1000', phone: '+359 881233456'
});

const maria = new Reader('Maria', 'Petrova', 'mariap@gamil.com', 'maria');

const userRepo: UserRepository2  = new InMemoryUserRepository(new NumberIdGenerator());
userRepo.create(tarayn);
userRepo.create(georgi);
userRepo.create(maria);
console.log(userRepo.findAll())

const controller: LoginController = new DemoLoginController(userRepo);

const loginComponent = new LoginComponent('#results', controller);

// controller.login("tiliev@gamil.com", "tiliev")
// .then(loggedInUser => {
//     document.getElementById('results')!.innerHTML = `You successfully logged in as: ${loggedInUser.getSalutation()}`;
//     console.log(controller.getCurrentUser())
// })
// .catch(err => document.getElementById('results')!.innerHTML = 'Invalid email or password.')
// document.getElementById('results')!.innerHTML = greeter(userRepo.findAll());
// (document.getElementById('results') as HTMLElement).innerHTML = greeter(userRepo.findAll());