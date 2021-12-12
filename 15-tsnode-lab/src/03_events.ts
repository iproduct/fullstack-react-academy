import { EventEmitter } from "stream";

async function* eventGenerator(): AsyncGenerator<number, any, unknown> {
    for (let i = 0; i < 10; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000))
        yield i
    }
}


const myEE = new EventEmitter();
myEE.on('foo', (payload) => console.log(`My "foo" event received: ${payload}`));
// myEE.prependListener('foo', () => console.log('I am listening for "foo" event too.'));
// myEE.once('foo', () => console.log('I am listening for "foo" event too.'));
const listener2 = (payload) => console.log(`I am listening for "foo" event too: ${payload}`)
myEE.on('foo', listener2);
setTimeout(() => myEE.removeListener("foo", listener2), 5000);

(async () => {
    for await (const i of eventGenerator())
        myEE.emit("foo", "foo_" + i)
})();


