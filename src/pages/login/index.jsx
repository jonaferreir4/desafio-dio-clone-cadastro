import React from "react"
import { MdEmail, MdLock } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import  { Input } from "../../components/Input"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { api } from '../../services/api'

import { 
    Row,
    Title, 
    Column,
    Wrapper,
    Container,
    CriarText,
    TitleLogin,
    EsqueciText,
    SubtitleLogin } from './styles'

const schema = yup
.object({
    email: yup.string().email('email não é válido').required('campo obrigatório'),
    password: yup.string().min(3, 'No minimo, 3 caracters').required('campo obrigatório'),
})
.required()

const Login = () => {
    const navegate = useNavigate()

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    })

    console.log(isValid, errors)
    const onSubmit = async formData => {
        try {
            const  { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if(data.length === 1) {
                navegate('/feed')
            } else {
                alert('email ou senha inválido')
            }

        } catch(error) {
            alert('houve um erro')
        }
    }
    
    const handleClikLogin = () => {
        navegate('/feed')
    }

    return (
        <>
            <Header/>
            <Container>
                <Column>
                    <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.</Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name='email' control={control} errorMessage={errors?.email?.message} placeholder="E-mail" leftIcon={<MdEmail/>}/>
                            <Input name='password' control={control} errorMessage={errors?.password?.message} placeholder="Senha" type='password' leftIcon={<MdLock/>}/>
                            <Button title='Entrar' variant="secondary"  type="submit"/>

                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar Conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )

}

export default Login