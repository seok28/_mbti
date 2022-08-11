import React from 'react';
import Button from 'react-bootstrap/Button';
const {Kakao} = window;


const KakaoShareButton = () => {
    const url = "https://mbtiseok.netlify.app/";
    const resultUrl = window.location.href;
    console.log('ddd',resultUrl, url);


 React.useEffect(() => {
        Kakao.cleanup();
        Kakao.init("5381976664f0a8e8eac1906823338949");
        console.log(Kakao.isInitialized());
    }, []);

    const shareKakao = () => {
        
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: 'mbti 검사 결과 ',
          description: '사용자의 mbti에 맞는 고양이는 석준수 입니다',
          imageUrl:
            'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
          link: {
            mobileWebUrl: url,
            androidExecutionParams: 'test',
          },
        },
        
        buttons: [
          {
            title: '나도 mbti 검사 하러 가기',
            link: {
              mobileWebUrl: url,
            },
          },
         
        ]
      });
    }
    return (
        <Button onClick={shareKakao} style={{ marginLeft: 20 }}> 
        카카오톡 공유하기
        </Button>)

}
export default KakaoShareButton;