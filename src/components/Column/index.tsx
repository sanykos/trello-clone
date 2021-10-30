import { FC } from 'react';
import { AddNewItem } from '../AddNewItem';
import { ColumnProps } from './interfaces';
import { ColumnContainerStyled, ColumnTitleStyled } from './styles';

export const Column: FC<ColumnProps> = ({ text, children }) => {
    return (
        <ColumnContainerStyled>
            <ColumnTitleStyled>{text}</ColumnTitleStyled>
            {children}
            <AddNewItem
                toggleButtonText="toggleButtonText"
                onAdd={() => console.log('test')}
                dark
            />
        </ColumnContainerStyled>
    );
};
