import sex_on_the_beach from '../../assets/images/cocktails/섹온비.gif'
import pousse_cafe from '../../assets/images/cocktails/파우스트.gif'
import espresso_martini from '../../assets/images/cocktails/에스프래소마티니.gif'
import aqua_vitae from '../../assets/images/cocktails/옥보단.gif'
import lime_mojito from '../../assets/images/cocktails/라임모히또.gif'
import jungle_bird from '../../assets/images/cocktails/준벅.gif'
import long_island_iced_tea from '../../assets/images/cocktails/롱아일랜드.gif'
import midori_sour from '../../assets/images/cocktails/미도리샤워.gif'
import cosmopolitan from '../../assets/images/cocktails/코스모폴리탄.gif'
import jagerbomb from '../../assets/images/cocktails/예거밤.gif'
import peach_crush from '../../assets/images/cocktails/피치크러쉬.gif'
import blue_hqwaii from '../../assets/images/cocktails/블루하와이.gif'
import jack_and_coke from '../../assets/images/cocktails/잭콕.gif'
import gin_and_tonic from '../../assets/images/cocktails/진토닉.gif'
import tequila_sunrise from '../../assets/images/cocktails/데낄라선라이즈.gif'
import margarita from '../../assets/images/cocktails/마가리타.gif'
import { MBTIINFO } from '../../types/mbti'

const COCKTAILS: { [key: string]: string } = {
    ENFP: sex_on_the_beach,
    ESTJ: pousse_cafe,
    INTJ: espresso_martini,
    INTP: aqua_vitae,
    ISTP: lime_mojito,
    ESFJ: jungle_bird,
    ISFJ: long_island_iced_tea,
    ESTP: midori_sour,
    ENTP: cosmopolitan,
    ESFP: jagerbomb,
    INFP: peach_crush,
    ENFJ: blue_hqwaii,
    ISTJ: jack_and_coke,
    ENTJ: gin_and_tonic,
    ISFP: tequila_sunrise,
    INFJ: margarita,
}

const COCKTAIL_INFO: {[key: string]: MBTIINFO} = {
    ENFP: {
        name: '섹스 온더 비치',
        tags: ['피치코코맛', '또는파인애플맛', '9도'],
        description: '남자가 이 칵테일을 시켜주어 여자가 마신다면 반드시 두 사람은 키스를 나누어야 한다는 풍습이 있습니다. 파인애플 주스 버전과 피치 슈냅스 버전으로 총 2가지 레시피가 존재합니다. 보드카 베이스에 복숭아 혹은 파인애플 주스를 넣고, 다른 주스들을 섞어 마십니다. 취향에 따라 체리나 막대사탕을 곁들이는 등 다양한 형태로 즐기는 칵테일입니다.',
        personality: ['사람을 좋아하는데 한번 끝나버린 관계는 뒤돌아보지 않음.', '보이는 것과는 다르게 생각이 되게 깊음.', '눈치 빠른데 티 안냄.', '본인이 낯가리고 내향적이라고 생각함.', '외로움 많이 느끼는 편.', '텐션이 모 아니면 도. 약속 시간 다 되가면 스트레스 받음.', '일기 꾸준히 못 쓰고 우울할 때만 씀.'],
        characteristic: ['친구들이 술자리 나만 안 부르면 서운함.', '낯가리는 데, 못 어울리는 사람 챙기게 됨.', '사람들 어색해 하는거 못 참아서 말 많아짐.', '주문하는데 쓸데없이 진심임.'],
        good: 'ESFJ',
        bad: 'ISTJ',
        name_color: '#512503',
        tag_color: '#FD7007'
    },
    ESTJ: {
        name: '파우스트',
        tags: ['포도향', '달달한쎈술', '44도'],
        description: '럼 베이스 칵테일의 한 종류로 알콜도수가 높은 칵테일입니다. 보통 사람들이 알고 있는 칵테일 중에서는 알콜도수가 거의 최상위에 드는 칵테일입니다. 술이 약하면 적당히 마시는 것이 좋습니다. 맛은 럼의 강렬한 향을 크렘 드 카시스의 과일 향과 단 맛이 살짝 덮어주는 맛입니다. 파우스트 한잔에 약 소주 4잔과 같은 양의 알코올이 들어 있습니다.',
        personality: ['계획적, 논리적, 현실적, 완벽주의임. 약속 시간 칼 같이 지키고, 늦는 사람들 이해 못함.', '리더를 맡는 걸 좋아하는건 아닌데 맡기면 똑부러짐.', '무언가를 미루는 것까지 계획을 짬.', '상대방 파악 잘함.', '겉으로는 공감하고 속으로는 팩트 체크함.', '친한 사람들한테 잔소리 많이 함.', '"~하긴 한데" , "그래서 결론이 뭔데?" 라는 말 달고 삼.'],
        characteristic: ['술 한번 먹을 때 끝까지 먹음.', '계속 술 빼는 거 못 참음.', '내가 모르는 얘기 + 정신없는 분위기 기 빨림.', '진지하고 현실적인 얘기함.'],
        good: 'ESTP',
        bad: 'INFP',
        name_color: '#560D04',
        tag_color: '#E27372'
    },
    INTJ: {
        name: '에스프레소 마티니',
        tags: ['달달한쎈술', '레쓰비맛 ', '22도'],
        description: '저를 깨워주고, 조져주는(Wake me up, Fuck me up) 음료 하나 주세요.” 라는 주문에 선보인 칵테일입니다. 유제품류가 들어 있지 않음에도 불구하고 칵테일 위에 거품 층이 생겨 커피와 모습이 비슷합니다. 에스프레소 샷이 들어가 달달한 커피맛이 나며, 카페라테 크림과 같은 질감입니다. 그러나, 생각보다 알코올 도수가 있어 유의하는 것이 좋습니다.',
        personality: ['당일 약속 잡는 것 싫어함.', '인간보다 동물을 더 좋아하고 정이감.', '사람들 각각 다른 모습으로 친해져서 진짜 자신을 안 드러냄.', '눈치가 없는게 아니라 관심이 없음.', '쓸데없는 연락 싫어함.', '고민 상담하면 어떻게 반응해야 할지 모르겠음.', '"굳이?" 라는 말 달고 삼.'],
        characteristic: ['실 없는 말 너무 많이 하는 사람 안 좋아함.', '그래도 관심 있는 주제면 재밌어함.', '말 없다고 낯가린다 하면 짜증남.', '술자리를 굳이 안가는 편.'],
        good: 'ENFP',
        bad: 'ESFP',
        name_color: '#3C2103',
        tag_color: '#B08C73'
    },
    INTP: {
        name: '옥보단',
        tags: ['잔끝에설탕 ', '쿨피스맛 ', '5도'],
        description: '대한민국 부산에서 만들어진 칵테일입니다. 리큐르 베이스 칵테일로, 이름은 고전소설 및 영화로 잘 알려진 옥보단에서 가져왔다고 알려져 있습니다. 잔 가장자리에 설탕을 묻혀두는데 잔 가장자리에 묻은 설탕을 혀로 핥아먹는 모습 때문에 야한 이름이 붙었습니다. 하얀 백도복숭아 향이 나며, 코코넛 향, 꽃향기가 나는 달달한 열대과일맛 리큐르 기반 칵테일로, 술 맛이 거의 나지 않습니다.',
        personality: ['친한 애들하고 놀 때는 E, 안 친한 사람이면 I임.', '혼자 생각하다 기분 안 좋냐는 말 들어봄.', '철학적인 것 좋아하고 쓸데없는 것들 좋아함.', '귀찮게 하는 거 싫어하고 혼자만의 시간 있어야 함.', '스몰토크 싫어함.', '사람 상대하는 게 귀찮을 때 많음.'],
        characteristic: ['술자리 재미있는 일 구경하러 감.', '소수 선호하는데 좋아하는 사람들이어야 함.', '2차 관심 없는 줄 알았는데 조용히 같이 감.', '술자리에서 혼자 있는 시간 필요함.'],
        good: 'ENTP',
        bad: 'ESFJ',
        name_color: '#642506',
        tag_color: '#FD7007'
    },
    ISTP: {
        name: '라임모히토',
        tags: ['라임향', '애플민트', '7도'],
        description: '라임과 민트잎, 설탕과 바카디 그리고 토닉워터로 만들어진 상큼한 칵테일입니다. 라임과 애플민트잎의 조화로 시원함을 더해주는 맛 입니다. 새콤한 맛으로 여름에 많이 찾는 칵테일 음료 중 하나입니다.',
        personality: ['사려형 개인주의.', '멘탈강함. 츤데레.', '남한테 관심 없고 tmi 듣는 거 싫어함.', '관심받기 싫어하는데 관심받고 싶어함.', '미룰 수 있을 때까지 미룸.', '나한테 부담스럽게 굴거나 의존하는 사람 싫어함.', '본인 고민 굳이 남한테 얘기 안함.', '"어쩔 수 없잖아", "그럴 수도 있지", "그렇구나~"', ' 술이나 안주 아무거나 시켜도 됨, 관심 없음.'],
        characteristic: ['말 거는 사람 없어도 혼자 조용히 술 마심.', '나한테 취했다 집가라 간섭하는 거 싫어함.', '갑자기 취해서 우는 애 극혐함.'],
        good: 'ESTP',
        bad: 'ENFJ',
        name_color: '#3D521A',
        tag_color: '#91B958'
    },
    ESFJ: {
        name: '준벅',
        tags: ['열대과일', '메론코코넛', '18도'],
        description: '준 벅(June Bug)이란 ‘6월의 벌레’라는 의미로, 초록의 싱그러운 색깔이 그야말로 여름을 연상시킵니다. TGI Fridays에서 개발된 칵테일이라고 합니다. 준 벅에는 향과 맛이 달콤하기로 유명한 리큐르인 말리부가 들어갑니다. 초록색의 색감, 멜론과 코코넛의 달콤한 향기가 나고, 알코올이 잘 느껴지지 않아 사랑받는 칵테일 중 하나입니다.',
        personality: ['책임감. 계획적. 약속 많음.', '감정기복 심함. 칭찬받는 것 좋아함.', '완전 외향적인 것도 아니고 내향적인 것도 아님.', '리액션 좋다는 말 많이 들음.', '말도 많음. 친구 얘기에 감정이입 잘하고 리액션 부자.', '사소한 것 잘 기억함.', '썰 항상 많이 얘기하고 너무 떠들었나 생각함.'],
        characteristic: ['처음 본 사람이랑 생각보다 잘 놈. 술자리에서 소외되는 사람 있으면 신경 쓰임.', '다같이 2차 가는거 좋아함.', '술 취한 친구 잘 챙겨서 2차 데려감.'],
        good: 'ISFJ',
        bad: 'INTP',
        name_color: '#23580A',
        tag_color: '#90B955'
    },
    ISFJ: {
        name: '롱 아일랜드 아이스티',
        tags: ['레몬콜라맛', '홍차맛', '20도'],
        description: '뉴욕주의 롱아일랜드에서 탄생한 칵테일로 40도 이상의 강한 술과 레몬주스, 콜라와 믹스해서 만든 칵테일입니다. 데킬라, 럼, 보드카 등 여러 양주를 베이스로 하는 칵테일로, 한국에서는 줄여서 롱티라고 흔히 부릅니다. 미국의 금주법 시대에 밀주된 술을 팔고 남는 술을 종류불문 섞어서 한번에 마실 생각으로 만들어진 잡탕술이 레시피로 만들어졌습니다. 쉽게 말해 폭탄주로, 레몬맛 아이스티와 콜라의 단맛이 알콜 맛을 감춰주어 인기있는 칵테일 중 하나입니다.',
        personality: ['배려심, 완벽주의, 평화주의, 무한애정.', '상대방이 무시하는 거 싫어함.', '정 많고, 나한테 잘해주면 다 도와줌.', '후회없이 살려고 노력함.', '반복된 일상 즐기고 좋아함.', '싸움 싫어하는데, 선 넘으면 손절함.', '댓글 하나 쓰거나 글 읽을 때 오래걸림.'],
        characteristic: ['술집이나 안주 먼저 추천해주면 좋아함.', '괜히 추천했다가 실망할까봐 눈치봄.', '고민은 잘 들어주는데 영혼 없는 대답함.', 'I 인데 술 먹을 때는 E 같다는 소리 자주 들음'],
        good: 'ESFJ',
        bad: 'ENTP',
        name_color: '#472404',
        tag_color: '#C78F4B'
    },
    ESTP: {
        name: '미도리샤워',
        tags: ['새콤멜론맛', '달달한사우어', '10도'],
        description: '멜론 리큐르의 한 종류인 미도리를 사용해 만드는 유명한 칵테일입니다. 멜론맛인 미도리와 스윗&사워 믹스의 레몬향이 어우러져서 상큼한 색깔과 맛을 연출합니다. 미도리는 일본어로 ‘초록색’을 뜻하고, 사워(Sour)는 ‘시큼함’을 뜻합니다. 달달하고 새콤한 멜론 맛으로 가볍게 먹기 좋은 칵테일입니다.',
        personality: ['내 사람 생기면 제일 잘 챙겨줌.', '덜 친하면 친절, 친하면 막 대함.', '감정 공감 잘 못하고 감정적인 사람 싫어함.', '쉽게 화 안내고 화나도 금방 풀림.', '말 돌려하는 거 싫어함 결론이 중요.', '한번 꽂히면 하루종일 함.', '근데 금방 실증남.', '"이해는 되는데, 공감은 안가."'],
        characteristic: ['분위기 흐리는 사람 싫어함.', '술자리 즉흥적으로 가는 경우 많음.', '진지충 싫어함.', '재밌는 술자리 좋아함.', '2차는 무조건 감 끝까지 마심.'],
        good: 'ISTP',
        bad: 'INFJ',
        name_color: '#285415',
        tag_color: '#729B2E'
    },
    ENTP: {
        name: '코스모폴리탄',
        tags: ['크랜베리', '달달쎈술', '22도'],
        description: '세계적인 의미를 지닌 코스모폴리탄은 달콤한 맛과 분홍색 빛의 색감을 가지고 있는 칵테일입니다. 트리플 섹 리큐어, 라임 주스 그리고 크렌베리 주스로 만들어진 코스모폴리탄은 뉴욕의 여성들에게 인기있는 칵테일 중 하나입니다. 미국의 인기 드라마인 Sex and the City의 캐리가 즐겨 마시던 칵테일 중 하나로, 도시적이고 세련된 칵테일입니다.',
        personality: ['본인이 특별하고 매력 있다고 생각함.', '호기심 많고, 새로운 도전하는 걸 좋아함.', '알쓸신잡, 넓고 얕게 앎.', '뭐 하나 끝까지 보는거 지루해함.', '매일 똑같고 재미 없는 삶 기피함.', '그래서 모든 분야에서 안 맞으면 손절 빨리함.', '"왜?" 라는 말 제일 많이 함.'],
        characteristic: ['2차 무조건 감, 술 잘먹고 좋아함.', 'tmi 쉴새 없이 친구들한테 말해줌.', '술자리에서 친한 사람이면 장난 계속 침.', '좋아하는 사람 앞에서는 수줍은 뚝딱이.'],
        good: 'INFJ',
        bad: 'ISTJ',
        name_color: '#A82338',
        tag_color: '#CD7A88'
    },
    ESFP: {
        name: '예거밤',
        tags: ['에너지드링크', '쌉쌀한맛', '35도'],
        description: '리큐르인 예거마이스터와 에너지 드링크인 레드불을 섞어서 만드는 칵테일입니다. 독일 술인 예거마이스터와, 오스트리아 음료인 레드불의 만남이라는 점에서 게르만 칵테일이라고 불리기도 합니다. Crossfaith라는 밴드가 이 예거밤을 주제로 곡을 내기도 했습니다. 가사 내용은 먹고 죽자! 한국에서 폭탄주 만드는 방법과 비슷합니다.',
        personality: ['긍정적, 사람 때문에 울고 웃고.', '고민이나 화나고 우울한 감정 금방 털어버림.', '할 일 절대로 기한 안에 못 함.', '벼락치기 함. 드라마 스포 당해도 괜찮음 오히려 더 좋아함.', '싸우는 것 싫어해서 거절 잘 못함.', ' 상처 잘 받음.', '관심 받는 것 좋아하고 관심 못받으면 슬퍼함.', '혼자 있을 때 우울해하고 외로움 많이 탐.'],
        characteristic: ['어색한 분위기 풀려고 말 많이 하고 후회함.', '술자리 안부르면 엄청 서운해 함.', '술자리 가면 웃음부자, 흥부자임.', '친구 없다고 하는데 즉흥 술자리 많은 편.'],
        good: 'ISFP',
        bad: 'INTJ',
        name_color: '#42240C',
        tag_color: '#B38769'
    },
    INFP: {
        name: '피치크러쉬',
        tags: ['복숭아맛', '새콤달콤', '6도'],
        description: '피치크러쉬는 피치 트리 리큐르와 다양한 주스들을 잘 섞어서 만드는 칵테일 입니다. 복숭아 향이 살짝 나며 맛은 새콤달콤합니다.피치크러쉬는 6도로 도수가 매우 낮고 술맛이 거의 나지 않아, 술을 잘 먹지 못하는 사람들에게도 인기가 많습니다. 칵테일 바에 따라 복숭아를 으깨서 넣는 경우도 있다고 합니다.',
        personality: ['게으른 완벽주의자.', '개복치. 귀여운거 좋아함.', '간섭, 오지랖, 훈수 두는 거 싫어함.', '감정기복이 심하고 자존감 낮아질 때 있음.', '관심 없는 사람한테 공감하는 척하고 딴 생각함.', '사람들 싸우는 것 보면 스트레스 받음.', '평화로운 곳에서 아무 눈치 안보고 좋아하는 것만 하고 싶음.', '사람들 사소한 행동에 의미 부여함.'],
        characteristic: ['완전 조용한곳 싫어함 적당히 사람있는 곳이 좋음.', '어색한 사람 많으면 술자리 비우는거 눈치봄.', '다수랑 있으면 기빨림.', '소수랑 있으면 살아남.', '집가서 술자리에서 실수한 거 없나 반성함.'],
        good: 'ENFJ',
        bad: 'ESTJ',
        name_color: '#BE3B1F',
        tag_color: '#FD9780'
    },
    ENFJ: {
        name: '블루하와이',
        tags: ['파워에이드맛', '트로피컬', '15도'],
        description: '블루 하와이는 블루 큐라소와 파인애플 주스로 만들어져 하와이를 연상하는 대표 칵테일 중 하나입니다. 볼스 영업사원이 회사 제품인 블루 큐라소로 만든 음료를 부탁하자 직접 만들어낸 칵테일이라고 합니다. 파워에이드 마운틴 블라스트, 폴라포 스포츠 맛과도 비슷한 블루하와이는 색감과 맛이 미묘한 칵테일입니다.',
        personality: ['유리 마음, 애정만땅.', '사람들한테 소소하게 상처받는거 많음.', '모든 사람이 행복했음 좋겠음.', '선물 주는 거 본인이 설레하면서 좋아함.', '어색한 분위기 싫어해서 먼저 다가감.', '경계심 없어서 빠른 속도로 친해짐.', '눈치가 빨라서 누가 나 싫어하는 티 내면 상처받음.'],
        characteristic: ['술자리에서 고민 얘기하면 본인 일처럼 들어줌.', '새로운 사람이랑 술 먹는거 은근 좋아함.', '소외되는 친구 있으면 엄청 잘 챙김.', '무조건 취해도 안 취한척 함'],
        good: 'INFP',
        bad: 'ISTP',
        name_color: '#136E69',
        tag_color: '#5EB5B9'
    },
    ISTJ: {
        name: '잭콕',
        tags: ['위스키콜라', '레몬향', '10도'],
        description: '위스키인 잭 다니엘에 콜라를 섞어 마시는 칵테일입니다. 스모키하고 씁쓸한 향과 달달한 끝맛으로 부드럽게 마무리 되어, 호불호 없이 즐기는 칵테일입니다. 높은 도수와 거친 맛으로 터프한 이미지의 칵테일 중 하나입니다.',
        personality: ['시간 약속 안 지키는 사람 싫어함.', '모든 경우의 수를 생각하고 효율적으로 동선을 계획함.', 'Tmi 계속 못 들음, 들어도 공감 잘 안되고 반응도 잘 못함.', '말 바꾸는 사람, 내로남불, 말 많은 사람 싫어함 돌려서 얘기하는거 싫어함.', '논리적인 팩트가 중요.', '감정적으로 행동하는 사람 싫어함.', '루틴대로 진행되는 게 편안함.'],
        characteristic: ['적당히 마셔서 술자리에서 실수하는 일 없음.', '귀가 본능. 2차 전에 이미 집에 가고 술자리에 없음.', '안 친한 사람이면 말 먼저 안검. 한정된 안주 안에서 돌려 먹음.'],
        good: 'ESTJ',
        bad: 'ENFP',
        name_color: '#391805',
        tag_color: '#9B6E57'
    },
    ENTJ: {
        name: '진 토닉',
        tags: ['상쾌한맛', '라임레몬', '40도'],
        description: '진 토닉은 청량하고 상큼한 맛의 칵테일입니다. 허브향으로 알콜향이 나지 않는 진토닉은, 어떤 진을 사용하냐에 따라 맛이 달라진다고 합니다. 진 토닉은 말라리아 때문에 탄생하게 되었는데, 쓴 ‘퀴닌’을 달게 먹으려고 술, 설탕 등을 섞어 마시다 만들어졌다고 합니다.',
        personality: ['극강효율, 성취욕구, 책임감.', '목표가 없으면 우울해짐.', '항상 삶의 목표를 고민함.', '왜인지 모르지만 늘 남들보다 잘 살거라고 생각함.', '안 좋은 일이 생기면 최고의 복수는 성공이라 다짐하고 할일 함.', '우유부단, 감정적, 노력안하고 게으른 사람 싫어함.', '눈 밖에 나면 눈에 안 보이게 은근슬쩍 손절함.', '착하다는 말보다 일 잘하는 말이 더 듣기 좋음.'],
        characteristic: ['술자리에서 분위기 주도함.', '취해서 감정적으로 행동하는 사람 이해못함.', '관심 있는 사람 있으면 계속 말 검.', '싫은 사람은 비효율적이라 생각해서 말 안검'],
        good: 'ENTP',
        bad: 'INFP',
        name_color: '#667729',
        tag_color: '#A9AD58'
    },
    ISFP: {
        name: '데킬라 썬 라이즈',
        tags: ['시트러스', '오렌지맛', '15도'],
        description: '데킬라 썬 라이즈는 데킬라의 고향인 멕시코의 "일출"을 형상화해서 만든 상큼한 칵테일입니다. 오렌지 주스와 그레나딘 시럽, 그리고 데킬라가 들어가 스파이시하면서도 달달상큼한 칵테일입니다. 칵테일을 저으면 일출처럼 색이 짙어져 눈으로도 즐길 수 있는 칵테일입니다.',
        personality: ['단순끝판왕, 결정장애, 평화주의 싸우고는 거 싫어해서 왠만하면 참음.', '화내면 손절.', '호불호 딱히 없어서 아무거나 다 좋아함.', '카톡 1 절대 안사라짐, 잘못 누르면 귀찮아짐.', ' 속으론 눈치 빠름 겉으론 안빠른척, 이기적, 개인적 본인이 게으르고 저질체력이라 생각함.', '칭찬=기분 좋음 , 지적=심장 쿵쾅거림'],
        characteristic: ['술 약속 잡는 건 싫어하는데 막상 가면 잘 놈.', '집에 가고 싶은데 집에 가기 싫음 낯 가리는데 티 안 내려고 함.', '2차 가자 하면 어느새 따라가고 있음.'],
        good: 'ESFP',
        bad: 'ESTJ',
        name_color: '#824205',
        tag_color: '#DC954F'
    },
    INFJ: {
        name: '마가리타',
        tags: ['사우어라임', '잔에소금', '20도'],
        description: '마가리타는 달달한 라임맛과 신맛 그리고 잔에 묻은 소금의 짭짤함이 어우러지는 맛의 칵테일입니다. LA의 한 바텐더가 사냥을 갔다가 사고로 죽은 젊은 시절 연인의 이름을 붙여 만든 칵테일이라는 유래와, 호텔의 지배인이 소금을 넣어 마시는 것을 좋아했던 여자친구를 위해서 잔에 소금을 묻힌 칵테일을 고안했다는 유래가 전해집니다. 마가리타는 ‘마르가리타’라고 불리기도 하는 매력적인 칵테일입니다.',
        personality: ['게으른 완벽주의자,페르소나 행동 하나 말 한마디에 의미 부여해서 피곤함.', '사람은 절대 믿을 수 없다고 생각함.', '가식 다 보임. 선 넘거나 개념 없는 행동하면 칼 같이 차단함 친구마다 각각 다른 N개의 자아 장착함.', '흑백논리 피하려고 노력하고, 무한 생각 × 고민.', '철학적인 생각과 망상의 늪에 자주 빠짐.'],
        characteristic: ['새로운 사람이랑 마시는 거 은근 좋아함.', '"가볼래?" 하고 가고싶은 곳 은근슬쩍 얘기함.', '친구 고민 잘 들어줌 + 사람들 눈치 봄.', '집가는 길에 갑자기 너무 논 것 같아서 현타 옴.'],
        good: 'ENFP',
        bad: 'ESTP',
        name_color: '#376F0E',
        tag_color: '#87A872'
    },
}

export default null;
export {
    COCKTAILS, COCKTAIL_INFO,
}