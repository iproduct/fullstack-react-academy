// export interface IdGenerator<K> {
//     [Symbol.iterator]: Iterator<K>
// }


export class NumberIdGenerator implements Iterable<number> {
    [Symbol.iterator](): Iterator<any, any, undefined> {
        let current = 0;
        return {
            next() {
                return { done: false, value: ++current }
            }
        }

    }
}