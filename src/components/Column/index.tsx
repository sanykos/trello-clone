import { FC } from 'react';
import { ColumnProps } from './interfaces';
import { ColumnContainerStyled, ColumnTitleStyled } from './styles';

export const Column: FC<ColumnProps> = ({ text }) => {
    return (
        <ColumnContainerStyled>
            <ColumnTitleStyled>{text}</ColumnTitleStyled>
        </ColumnContainerStyled>
    );
};
