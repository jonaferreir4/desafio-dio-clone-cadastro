import React from "react"

import banner from '../../assets/imgs/banner.png'

import { Link } from "react-router-dom"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Card } from "../../components/Card"
import  { UserInfo } from "../../components/UserInfo"

import { Container, Column, Title, TitleHighlight } from './styles'

const Feed = () => {
    return (
        <>
            <Header autententicado={true}/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Column>
                <Column flex={1}>
                    <TitleHighlight># RANKING 5 TOP DA SEMANA </TitleHighlight>
                    <UserInfo percentual={90} name="Pablo Henrique" img='https://avatars.githubusercontent.com/u/45184516?v=4'/>
                    <UserInfo percentual={80} name="Pablo Henrique" img='https://avatars.githubusercontent.com/u/45184516?v=4'/>
                    <UserInfo percentual={50} name="Pablo Henrique" img='https://avatars.githubusercontent.com/u/45184516?v=4'/>
                    <UserInfo percentual={20} name="Pablo Henrique" img='https://avatars.githubusercontent.com/u/45184516?v=4'/>
                </Column>
            </Container>
        </>
    )

}

export default Feed