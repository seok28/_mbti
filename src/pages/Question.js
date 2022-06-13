import React from 'react';
import styled from 'styled-components';
import { ProgressBar,Button } from 'react-bootstrap';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { QuestionData } from '../assets/data/questiondata';

const Question = () => {
    const [questionNo,setQuestionNo] = React.useState(0);
    const [totalScore, setTotalScore]= React.useState([
       // 초기화
        {id:"EI" ,score:0},
        {id:"SN" ,score:0},
        {id:"TF" ,score:0},
        {id:"JP" ,score:0},
    ])

    // console.log('totalScore',totalScore); 
    
    const navigate = useNavigate(); // navigation 선언  
    const 클릭핸들러 = () => {
        navigate('/');
    }

    const clickButtonhandle = (no,type) => {
        const newScore = totalScore.map((s)=> 
            s.id === type ? {id: s.id, score:s.score + no} : s
        );
        setTotalScore(newScore);
        if (QuestionData.length !== questionNo +1) {
            setQuestionNo(questionNo +1);
        } else {
            // mbti 도출
            const mbti = newScore.reduce(
                (acc , curr) => 
                acc + (curr.score >= 2 ? curr.id.substring(0,1) : curr.id.substring(1,2)),
                ""
            );
            // console.log('mbti',mbti);
            // 결과 페이지 이동
           navigate({
               pathname: "/result",
               search: `?${createSearchParams({
                   mbti:mbti,
               })}` 
           })
        }
    }


    return (
        <Wrapper>
            <ProgressBar striped variant="danger" now={(questionNo / QuestionData.length) * 100} style={{ marginTop: '20px' }} />
            <Title> {QuestionData[questionNo].title} </Title>
            <ButtonGroup>
                <Button onClick={() => clickButtonhandle(1, QuestionData[questionNo].type)} style={{ width: "40%", minHeight: "200px", fontSize: "14pt", marginRight: "40px", backgroundColor: "blue" }}> {QuestionData[questionNo].answer1} </Button>
                <Button onClick={() => clickButtonhandle(0, QuestionData[questionNo].type)} style={{ width: "40%", minHeight: "200px", fontSize: "14pt", marginLeft: "20px", backgroundColor: "green" }}> {QuestionData[questionNo].answer2}  </Button>
            </ButtonGroup>
            <Contents>
                <Button onClick={클릭핸들러} > 홈으로 가기</Button>
            </Contents>
        </Wrapper>
    )
}

export default Question;

// CSS
const Wrapper = styled.div`
 height:100vh;
 width: 100%;
`

const Title = styled.div`
 font-size :20pt;
 text-align: center;
 font-family: "EF_Diary";
`
const ButtonGroup =styled.div `
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
font-family: "EF_Diary";

`
const Contents = styled.div `
display:flex;
justify-content:center;
margin-top: 50px;
font-family: "EF_Diary";
`