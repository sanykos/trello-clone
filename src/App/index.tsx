import { FC } from 'react';
import { Column } from '../components/Column';
import { Card } from '../components/Card';

import { AppContainerStyled } from './styles';

export const AppContainer: FC = () => {
    return (
        <AppContainerStyled>
            <Column text="To Do">
                <Card text="Generate app" />
            </Column>
            <Column text="In progress">
                <Card text="Learn Typescript" />
            </Column>
            <Column text="Done">
                <Card text="Begin to use static typing" />
            </Column>
        </AppContainerStyled>
    );
};
