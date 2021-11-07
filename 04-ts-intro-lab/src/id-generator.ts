export type IdGenerator<K> = Iterable<K>

export class NumberIdGenerator implements IdGenerator<number> {
    [Symbol.iterator](): Iterator<any, any, undefined> {
        let current = 0;
        return {
            next() {
                return { done: false, value: ++current }
            }
        }

    }
}