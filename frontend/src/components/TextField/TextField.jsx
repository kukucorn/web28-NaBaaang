import React from 'react';
import styled, { css } from 'styled-components';

export default function TextField({ labelText, inputRef }) {
    return (
        <>
            <InputLabel>{labelText}</InputLabel>
            <InputBox>
                <Input ref={inputRef} />
            </InputBox>
        </>
    );
}

const InputLabel = styled.label`
    width: 100px;
`;

const InputBox = styled.div`
    ${({ theme }) =>
        css`
            background-color: ${theme.color.gray2};
        `}
    border-radius: 40px;
    padding: 5px;
`;

const Input = styled.input`
    ${({ theme }) =>
        css`
            background-color: ${theme.color.gray2};
        `}
    border: none;
    caret-color: white;
    :focus {
        outline: none;
    }
`;