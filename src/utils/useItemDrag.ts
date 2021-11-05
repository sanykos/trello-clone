import { useDrag } from 'react-dnd';
import { useAppState } from '../state/AppStateContext';
import { DragItem } from '../state/intefaces';
import { setDragItem } from '../state/actions';

export const useItemDrag = (item: DragItem) => {
    const { dispatch } = useAppState();
    const [, drag] = useDrag({
        type: item.type,
        item: () => {
            dispatch(setDragItem(item));
            return item;
        },
        end: () => dispatch(setDragItem(null))
    });
    return { drag };
};
