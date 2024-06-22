import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    margin-top: 120px;

    justify-content: space-between;
    align-items: flex-start;
`

export const Wrapper = styled.div`
     max-width: 350px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const Column = styled.div`
    padding-right: 150px;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 388px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #fff;
`

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 10px;
    line-height: 25px;
`

export const SubtitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const InformationText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;

    color: #FFF;
`

export const LoginText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #FFF;

    a {
        font-weight: 400;
        text-decoration: none;
        color: #23dd7a;
    }
`

