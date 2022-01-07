import styled from 'styled-components';
import { DragPreviewContainerProps } from './interfaces';

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
    transform: ${props => (props.isPreview ? "rotate(5deg)" : undefined)};
    opacity: ${({ isHidden }) => (isHidden ? 0.3 : 1)};
`;
