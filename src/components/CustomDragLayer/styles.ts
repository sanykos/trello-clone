import styled from 'styled-components';
import { DragPreviewWrapperProps } from './interfaces'

export const CustomDragLayerContainer = styled.div` 
height: 100%;
left: 0;
pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`


export const DragPreviewWrapper = styled.div.attrs<DragPreviewWrapperProps>(
    ({ position: { x, y } }) => ({
        style: {
            transform: `translate(${x}px, ${y}px)`
        }
    })) <DragPreviewWrapperProps>``