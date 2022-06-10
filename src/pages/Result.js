import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const Result = () => {
    const navigate = useNavigate(); 
    const clickhandle = () => {
        navigate('/');
    }
    return (
<Wrapper>
    <Contents>
    <Button onClick={clickhandle} > 홈으로 가기</Button>
    </Contents>
    </Wrapper>
    
    )

}

export default Result;

const Wrapper = styled.div`
 height:100vh;
 width: 100%;
`
const Contents = styled.div `
display:flex;
justify-content:center;
margin-top: 50px;
font-family: "EF_Diary";
`