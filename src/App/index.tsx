import { FC } from 'react';
import { Column } from '../components/Column';

import { AppContainerStyled } from './styles';

export const AppContainer: FC = ({ children }) => {
    return (
        <AppContainerStyled>
            <Column text="title">Column</Column>
            <Column text="title1">Column</Column>
            <Column text="title2">Column</Column>
            <Column text="title3">Column</Column>
            {children}
        </AppContainerStyled>
    );
};
