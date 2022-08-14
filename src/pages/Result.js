import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import {ResultData} from '../assets/data/resultdata';
import KakaoShareButton from '../component/Kakao';


const Result = () => {
    const navigate = useNavigate();
    const[searchParams] = useSearchParams();
    const mbti = searchParams.get('mbti');
    const [resultData , setResultData] = React.useState({});
    // 최종 도출 mbti 객체 
    React.useEffect(() => {
        const result = ResultData.find((s) => s.best === mbti);
        setResultData(result);

    },[mbti])
    console.log(mbti);
    console.log(resultData);
    return (<Wrapper>
        <Header> MBTI 결과 </Header>
        <Contents>
        <Title> 나와 성격이 비슷한 고양이는 </Title>
        <LogoImage>
            <img alt = "메인 사진" src={resultData.image} className="rounded-circle" width ={350} height ={350}></img>
        </LogoImage>
        <Desc> 사용자님의 mbti 결과는 {resultData.name}입니다 </Desc>
        <ButtonGroup>
        <Button onClick={() => {navigate('/')}} style = {{marginRight:"20px"}}> 홈으로 가기 </Button>
        <Button onClick={() => {navigate('/question')}}> 검사 다시하기 </Button>
        <KakaoShareButton data = {resultData} /> {<br />} 
        </ButtonGroup>
        <Desc2>{resultData.desc}</Desc2>
        </Contents>
        </Wrapper>
    )
    

}

export default Result;

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
 font-weight: bolder;
 margin-top: 50px;
 font-family: "EF_Diary";
`
const Desc2 = styled.div`
 font-size: 17pt;
 font-weight: bolder;
 margin-top: 50px;
 text-align: center;
 font-family: "EF_Diary";
`

const ButtonGroup =styled.div `
display: flex;
flex-direction: row;

`