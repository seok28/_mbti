// MBTI  정리
// EI(에너지의 방향) : E(외향적, 단체활동 선호, 생각을 표출해 말하기를 선호) , I(혼자하는 활동 선호, 내면에 담고 글쓰는 것을 선호)  
// SN (인식방식) : S(감각형, 실용적,현실적, 숲보다 나무를 보면서 눈앞에 닥친 현실을 생각함, 이미 일어난적이 있는 일에 포커스) , N(직관형, 미래를 추구하고 이상적, 자기만의 방식, 나무보다 숲)
// TF (결정방식) : T(사고형, 객관성과 합리성에 초점, 논리적, 일과 목표 효율성 중시) , F(감정형, 감정표현에 예민,공감적인 성격, 논리보다는 대인관계 중시) 
// JP (삶의 패턴) : J(판단형, 결단력있고 철저하며 조직적, 명확성,예측 가능성 및 계획 중시) , P(인식형, 융통성 있고 편안함 중시, 자유롭고 즉흥적, 과정의 올바름 중시)
// 각 유형별 5가지 씩 총 20문제
import "./question.css";
export const QuestionData = [
    {
         id:1,
         title:"대학교에 입학해서 새로운 친구를 만나게 되었다. 나의 반응은??",
         answer1:"이름이 무엇인지 물어본다 계속 말을 걸고 싶다.", // E
         answer2:"아직은 적응할 혼자만의 시간이 필요하다.",     // I
         type:"EI",
    },
    {
        id:2,
        title:"새로운 옷과 신발을 샀다. 내가 보기에도 너무 이쁘고 상당히 맘에 든다. 나의 행동은 ??",
        answer1:"새로 산 옷이 너무 맘에 들어.. 친구들에게 자랑해야지!! 인스타에도 올리고, 친구들에게 자랑해야겠다!", // E
        answer2:"새로산 신발이랑 옷이 너무 맘에 든다... 사진 찍어서 혼자 핸드폰에 간직해야겠다..", // I
        type:"EI",
    },    
    {
        id:3,
        title:"오늘 학교에서 새로운 것을 배웠다. 이 새로운 것에 대한 많은 것이 궁금해졌다. 나의 행동은??",
        answer1:"관련 서적을 찾아보고 주변 친구들에게도 물어보고 교수님에게 찾아가서 질문도 한다.", // E
        answer2:"관련 서적은 찾아보지만 눈으로 참고만 하고 혼자서 공부한다.", // I
        type:"EI",
    },
    {
        id:4,
        title:"날씨가 정말 좋은 오후 내가 정말 듣고 싶은 노래는 ? ",
        answer1:"정말 신이나는 댄스 곡", // E
        answer2:"나에게 심적 안정를 심어줄 잔잔한 어쿠스틱 곡", // I
        type:"EI",
    },
    {
        id:5,
        title:"동아리 활동이나 단체 생활을 할 때 당신은 어떤 타입인가요?",
        answer1:"활발하고 적극적이라는 말을 많이 듣는편입니다.", // E
        answer2:"자신의 의견이나 감정을 표현하는데 있어서 종종 어려움을 겪습니다.", // I
        type:"EI",
    },
    {
        id:6,
        title:"사과하면 떠오르는것은 ?",
        answer1:"빨갛다 , 맛있다", // S
        answer2:"애플회사, 뉴턴", // N
        type:"SN",
    },
    {
        id:7,
        title:"노래를 들을 때 더 좋아하는것은?",
        answer1:"멜로디", // S
        answer2:"가사", // N
        type:"SN",
    },
    {
        id:8,
        title:"과제 제출기한을 놓쳤다... 어떻게 하지??",
        answer1:"아 과제를 못냈어.. 학점이 너무 걱정된다...", // S
        answer2:"왜 하필 과제가 오늘까지 였을까...?", // N
        type:"SN",
    },
    {
        id:9,
        title:"밥 먹을때 나의 특징은?",
        answer1:"김치찌개 된장찌개.. 뭐 먹지 인생 최대의 고민", // S
        answer2:"점심 먹으면서 저녁 뭐 먹을지 생각...", // N
        type:"SN",
    },
    {
        id:10,
        title:"버스를 타고 어디론가 가고있다.. 어떤 생각을 하시나요?",
        answer1:"창밖이 정말 이쁘다.. 나가서 놀고 싶다", // S
        answer2:"이 버스는 하루에 몇대나 배치될까.. 기사님은 피곤하지 않을까?  ", // N
        type:"SN",
    },
    {
        id:11,
        title:"친한 친구가 시험에 떨어졌다 나의 반응은? ",
        answer1:"무슨 시험인데? 몇점 맞았어?", // T
        answer2:"괜찮아.. 다음에는 꼭 붙을거야!", // F
        type:"TF",

    },
    {
        id:12,
        title:"나 돈 모아서 아이패드 샀어! 나의 반응은 ?",
        answer1:"와 대박! 아이패드 어떤 거 산거야?", // T
        answer2:"돈 힘들게 모았구나.. 고생 많았어 축하해!", // F
        type:"TF",
    },
    {
        id:13,
        title:"내가 약속 시간에 늦었다...",
        answer1:"사과보다는 어느 과정 때문에 늦었다는 것이 먼저", // T
        answer2:"어떻게 늦었는가 보다는 사과의 감정에 먼저 충실함", // F
        type:"TF",
    },
    {
        id:14,
        title:"열심히 준비한 면접.. 하지만 잘되지 않았다..",
        answer1:"T", // T
        answer2:"F", // F
        type:"TF",
    },
    {
        id:15,
        title:"친구가 시험에 떨어졌다..",
        answer1:"어떤 시험인데?? 몇점으로 떨어진거야? ", // T
        answer2:"떨어져서 어떻게 해... 다음에 꼭 붙을거야 ! ", // F
        type:"TF",
    },
    {
        id:16,
        title:"자신이 선호하는 루틴 ",
        answer1:"똑같이 반복되는 일상 선호", // J
        answer2:"쳇바퀴 같은 인생은 질색하고 매일매일 변화를 선호", // P
        type:"JP",
    },
    {
        id:17,
        title:"평소에 자신의 정리정돈 스타일은? ",
        answer1:"정리 정돈이 평소에 되어 있음", // J
        answer2:"한번에 몰아서 치우거나 자주 다른 날로 미룸", // P
        type:"JP",
    },
    {
        id:18,
        title:"다음주가 시험일 때 나의 반응은 ?",
        answer1:"J", // J
        answer2:"P", // P
        type:"JP",
    },
    {
        id:19,
        title:"여행을 계획을 짜는 타입은?",
        answer1:"첫날부터 마지막 날까지 전체적인 상세한 계획", // J
        answer2:"전체적인 틀만 짜두고 간단한 계획", // P
        type:"JP",
    },
    {
        id:20,
        title:"당신은 과정과 결과 중에 어떤것을 우선시 하시나요?",
        answer1:"과정보다 완성된 결과를 즐기고 기뻐하는 편 ", // J
        answer2:"진행되는 과정이 즐거우면 결과가 그리 좋지 않아도 긍정적인 편 ", // P
        type:"JP",
    },
]

// 각 유형별 질문 5개씩 useEffect 사용해 mbti 검출 