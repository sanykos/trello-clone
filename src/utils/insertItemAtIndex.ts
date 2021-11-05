export function insertItemAtIndex<TItem>(array: TItem[], item: TItem, index: number) {
    return [...array.slice(0, index), item, ...array.slice(index)];
}
