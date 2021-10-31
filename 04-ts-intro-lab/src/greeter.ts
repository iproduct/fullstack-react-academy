function greeter(user: string): string {
    return `Hi ${user} from Users Demo!`;
}

document.getElementById('results')!.innerHTML = greeter('Trayan');