import styled from 'styled-components'

export const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    height: 30px;
    border-bottom: 1px solid #3b3450;

    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const IconContainer = styled.div`
    width: 2px;
    margin-right: 20px;

`

export const InputText = styled.input`
    background: transparent;
    width: 100%;
    color: #fff;
    border: 0;
    height: 30px;
`

export const ErroMessage = styled.p`
    color: #FF0000;
    font-size: 12px;
    margin: 5px 0;
`