import styled from 'styled-components';
import { AddItemButtonProps } from './intefaces';

export const AddItemButtonStyle = styled.button<Partial<AddItemButtonProps>>`
    background-color: #ffffff3d;
    border-radius: 3px;
    border: none;
    color: ${({ dark }) => (dark ? '#000' : '#fff')};
    cursor: pointer;
    max-width: 300px;
    padding: 10px 12px;
    text-align: left;
    transition: background 85ms ease-in;
    width: 100%;
    &:hover {
        background-color: #ffffff52;
    }
`;
