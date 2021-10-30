import { useState } from 'react';
import { useFocus } from '../../utils/useFocus';
import { NewItemFormProps } from './intefaces';
import { NewItemFormContainerStyle, NewItemInputStyle, NewItemButtonStyle } from './styles';

export const NewItemFormContainer = ({ onAdd }: NewItemFormProps) => {
    const [text, setText] = useState('');
    const inputRef = useFocus();
    return (
        <NewItemFormContainerStyle>
            <NewItemInputStyle
                ref={inputRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <NewItemButtonStyle onClick={() => onAdd(text)}>Create</NewItemButtonStyle>
        </NewItemFormContainerStyle>
    );
};
