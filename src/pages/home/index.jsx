import React from "react"
import banner from '../../assets/imgs/banner.png'
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"

import { Container, TextContent, Title, TitleHighlight} from './styles'

const Home = () => {
    const navegate = useNavigate()
    
    const handleClikSignIn = () => {
        navegate('/login')
    }

    return (
        <>
            <Header/>
            <Container>
                <div>
                    <Title>
                        <TitleHighlight>
                            Implemente
                         <br/> 
                        </TitleHighlight>
                        o seu futuro global agora
                    </Title>
                    <TextContent>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                    desafio profissional, evoluindo em comunidade com os melhores experts.</TextContent>
                    <Button title='começar' variant="secondary" onClinck={handleClikSignIn}/>
                </div>
                <div>
                    <img src={banner} alt="imagem principal" />
                </div>
            </Container>
        </>
    )

}

export default Home