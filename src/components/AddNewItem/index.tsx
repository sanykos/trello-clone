import { useState } from 'react';
import { AddNewItemProps } from './intefaces';
import { NewItemFormContainer } from '../NewItemFormContainer';

import { AddItemButtonStyle } from './styles';

export const AddNewItem = (props: AddNewItemProps) => {
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
