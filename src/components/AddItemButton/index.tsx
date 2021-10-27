import { FC, useState } from 'react';
import { AddItemButtonProps } from './intefaces';
import { NewItemFormContainer } from '../NewItemFormContainer';

import { AddItemButtonStyle } from './styles';

export const AddItemButton = (props: AddItemButtonProps) => {
    const [showForm, setShowForm] = useState(false);
    const { onAdd, toggleButtonText, dark } = props;

    return (
        <>
            {showForm && (
                <NewItemFormContainer
                    onAdd={(text) => {
                        onAdd(text);
                        setShowForm(!showForm);
                    }}
                />
            )}
            <AddItemButtonStyle dark={dark} onClick={() => setShowForm(!showForm)}>
                {toggleButtonText}
            </AddItemButtonStyle>
        </>
    );
};
