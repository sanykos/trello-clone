import { useState } from 'react';
import { NewItemFormProps } from './intefaces';
import { NewItemFormContainerStyle, NewItemInputStyle, NewItemButtonStyle } from './styles';

export const NewItemFormContainer = ({ onAdd }: NewItemFormProps) => {
    const [text, setText] = useState('');
    return (
        <NewItemFormContainerStyle>
            <NewItemInputStyle value={text} onChange={(e) => setText(e.target.value)} />
            <NewItemButtonStyle onClick={() => onAdd(text)}>Create</NewItemButtonStyle>
        </NewItemFormContainerStyle>
    );
};
