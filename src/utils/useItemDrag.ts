import { useEffect } from 'react'
import { useDrag } from 'react-dnd';
import { useAppState } from '../state/AppStateContext';
import { DragItem } from '../state/intefaces';
import { setDragItem } from '../state/Actions';
import { getEmptyImage } from 'react-dnd-html5-backend';

export const useItemDrag = (item: DragItem) => {
    const { dispatch } = useAppState();
    const [, drag, preview] = useDrag({
        type: item.type,
        item: () => {
            dispatch(setDragItem(item));
            return item;
        },
        end: () => dispatch(setDragItem(null))
    });
    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true })
    }, [preview])
    return { drag };
};
