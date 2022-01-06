import styled from 'styled-components';
import { DragPreviewContainerProp } from './interfaces';

export const DragPreviewContainer = styled.div<DragPreviewContainerProp>`
    transform: ${props => (props.isPreview ? "rotate(5deg)" : undefined)};
    opacity: ${({ isHidden }) => (isHidden ? 0.3 : 1)};
`;
