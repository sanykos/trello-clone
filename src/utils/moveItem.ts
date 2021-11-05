import { removeItemAtIndex } from './removeItemAtIndex';
import { insertItemAtIndex } from './insertItemAtIndex';

export const moveItem = <TItem>(array: TItem[], from: number, to: number) => {
    const item = array[from];
    return insertItemAtIndex(removeItemAtIndex(array, from), item, to);
};
