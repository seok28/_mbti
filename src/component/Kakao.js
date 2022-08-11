import React from 'react';
import Button from 'react-bootstrap/Button';
const {Kakao} = window;


const KakaoShareButton = ({ data }) => {
    const url = "https://catmbti0928.netlify.app";
    const resultUrl = window.location.href;

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
          description: `사용자의 mbti에 맞는 고양이는 ${data.name} 입니다`,
          imageUrl: url + data.image,
          link: {
            mobileWebUrl: resultUrl,
            webUrl: resultUrl,
          },
        },
        
        buttons: [
          {
            title: '나도 mbti 검사 하러 가기',
            link: {
              mobileWebUrl: url,
              webUrl: url,
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