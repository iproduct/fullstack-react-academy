
import {User, Author, Reader, Admin} from './user.js';

function greeter(user: User): string {
    return `Hi ${user.getSalutation()}`;
}

const tarayn = new Admin('Trayan', 'Iliev', 'tiliev@gamil.com', 'tiliev');
document.getElementById('results')!.innerHTML = greeter(tarayn);