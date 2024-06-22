import React from "react";
import LogoDio from '../../assets/imgs/logo-dio.png'
import { 
    BuscarInputContainer,
    Column,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper,


 } from './styles'
import { Button } from "../Button";

const Header = ({ autententicado }) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={LogoDio} alt="logo dio" />
                    {autententicado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder="Buscar..."/>
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>

                    ): null}
                </Row>
                <Row>
                    {autententicado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
                ): (

                        <>
                            <MenuRight>Home</MenuRight>
                            <Button title='Entrar'/>
                            <Button title='Cadastrar'/>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }