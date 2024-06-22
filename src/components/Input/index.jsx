import React from "react";
import {InputContainer, InputText, IconContainer, ErroMessage } from './styles'
import { Controller } from "react-hook-form";

const Input = ({leftIcon, name, control, errorMessage, ...rest}) => {
    return (
        <>
            <InputContainer>
            {leftIcon ? (
                <IconContainer>{leftIcon}</IconContainer>
            ) : null}
            <Controller
                name={name}
                control={control}
                render={({ field }) => <InputText  { ...field } { ...rest }/>}
                />
            </InputContainer>
            {errorMessage ?  <ErroMessage>{errorMessage}</ErroMessage> : null}
        </>
    )
}

export { Input }