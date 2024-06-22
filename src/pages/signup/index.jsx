import React from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

import { MdEmail, MdLock, MdPerson } from "react-icons/md"

import { Container, Title, TitleLogin, Wrapper, SubtitleLogin, Row, Column, InformationText, LoginText} from "./styles";


import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { api } from '../../services/api'


const schema = yup
.object({
    name: yup.string().required('campo obrigatório'),
    email: yup.string().email('email não é válido').required('campo obrigatório'),
    password: yup.string().min(3, 'No minimo, 3 caracteres').required('campo obrigatório'),
})
.required()

const Signup = () => {
    const navigate = useNavigate()

    const { control, handleSubmit, reset , formState: { errors, isValid, } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    })

    const onSubmit = async (formData) => {
        try {
            await api.post('/users', formData)
        } catch (error) {
            alert(`Houve um erro: ${error.message}`)
        }
    }

    return (
        <>
            <Header/>
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, 
                        dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>

                <Column>
                <Wrapper>
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name='name' control={control} placeholder="Nome completo" leftIcon={<MdPerson/>}/>
                            <Input name='email' control={control} placeholder="E-mail" leftIcon={<MdEmail/>}/>
                            <Input name='password' control={control} placeholder="Senha" type='password' leftIcon={<MdLock/>}/>
                            <Button title='Criar minha conta' variant="secondary"  type="submit"/>

                        </form>
                        <Row>
                            <InformationText>
                                Ao clicar em "criar minha conta grátis", 
                                declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                            </InformationText>
                        </Row>
                        <Row>
                            <LoginText>
                            Já tenho conta. <a href="/login" >Fazer login</a>
                            </LoginText>
                        </Row>
                </Wrapper>
                </Column>
              
            </Container>
        </>
    )
}


export { Signup }
