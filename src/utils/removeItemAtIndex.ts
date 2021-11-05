export function removeItemAtIndex<TItem>(array: TItem[], index: number) {
    return [...array.slice(0, index), ...array.slice(index + 1)];
}
