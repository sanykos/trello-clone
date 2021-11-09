import styled from 'styled-components';
import { DragPreviewContainerProp } from './interfaces';

export const DragPreviewContainer = styled.div<DragPreviewContainerProp>`
    opacity: ${({ isHidden }) => (isHidden ? 0.3 : 1)};
`;
