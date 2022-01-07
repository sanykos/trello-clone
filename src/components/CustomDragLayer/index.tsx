import { useDragLayer } from "react-dnd"
import { Column } from "../Column"
import { CustomDragLayerContainer, DragPreviewWrapper } from "./styles";
import { useAppState } from "../../state/AppStateContext";


export const CustomDragLayer = () => {
    const { draggedItem } = useAppState();

    const { currentOffset } = useDragLayer((monitor) => ({
        currentOffset: monitor.getSourceClientOffset()
    }));

    const showCustomDragLayer = draggedItem && currentOffset;

    return showCustomDragLayer && (
        <CustomDragLayerContainer>
            <DragPreviewWrapper position={currentOffset}>
                <Column
                    id={draggedItem.id}
                    text={draggedItem.text}
                    isPreview />
            </DragPreviewWrapper>
        </CustomDragLayerContainer>
    );
}