import React from "react";
import { ButtonContainer } from "./styles";


const Button = ({ title, variant = "primary", onClinck }) => {
    return (
        <ButtonContainer variant={variant} onClick={onClinck}>
            {title}
        </ButtonContainer>
    )

}

export { Button }