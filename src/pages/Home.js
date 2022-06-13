import React from 'react';
import styled from 'styled-components';
import PangImage from '../assets/ccc.jpg';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    
    const 클릭핸들러 = () => {
        navigate('/question');
    }
return (
    <Wrapper>
    <Header> MBTI </Header>
    <Contents>
    <Title> fonts: EF_Diary </Title>
    <LogoImage>
        <img alt= "메인 사진"  src={PangImage} className="rounded-circle" width ={350} height ={350}></img>
    </LogoImage>
    <Desc>MBTI 검사 프젝</Desc>
    <Button onClick={클릭핸들러}> 검사하기 </Button>
    </Contents>
    </Wrapper>
)
}

export default Home;

const Wrapper = styled.div `
 height:100vh;
 width: 100%;
`

const Header = styled.div `
 font-size:40pt;
 display:flex;
 justify-content:center;
 align-items:center;
 font-family: "EF_Diary";
 
`
const Contents = styled.div `
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;

`


const Title = styled.div `
 font-size :30pt;
 margin-top: 40px;
 font-family: "EF_Diary";

`
const LogoImage = styled.div `
 margin-top: 10px;

`

const Desc = styled.div`
 font-size: 20pt;
 margin-top: 50px;
 font-family: "EF_Diary";
 
`
