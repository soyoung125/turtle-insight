interface QuestionsType {
	questions: string[],
	options: {[key: string]: string[]},
}

interface Question {
	question: string,
	options: {
        type: string;
        answer: string;
    }[],
}

const MIND_QUESTIONS: QuestionsType = {
	questions: [
		"칵테일 파티에 초대받은 당신, 두 자리만 남았다면?",
		"갑자기 같은 날 두 모임에 초대 받았다면, 어느 술자리에?",
		"붐비는 칵테일 펍, 직원은 한 명뿐, 주문을 해야하는데 나에게 계속 오지 않는다면?",
		"친구를 기다리며 칵테일 바에 앉아있는 나, 갑자기 모르는 번호로 전화가 온다면?",
		"오랜만에 술자리가 생긴다면?",
	],
	options: {
		I: [
			"혼술러의 테이블",
			"친구의 집에서 소소한 파티",
			"좀 더 기다렸다가 오지 않으면 직접 가서 주문한다.",
			"모르는 번호니 안받는다.",
			"거의 친구가 만든 술자리다."
		],
		E: [
			"유명한 인사들이 모인 4명의 테이블",
			"유명한 술집에서 신나는 파티",
			"잊은 것 같으니, 손을 들고 종업원을 부른다.",
			"친구일지도 모르니 받는다.",
			"대부분 내가 먼저 만든 술자리다."
		]
	},
};

const ENERGY_QUESTIONS: QuestionsType = {
	questions: [
		"둘 중에 한 바텐더에게 칵테일을 주문해야 한다면?",
		"영화를 틀어주는 펍, 둘 중 하나의 영화를 골라야 한다면?",
		"친구가 죽음에 대해서 갑자기 묻는다. 당신의 속마음은?",
		"최애 칵테일을 먹으러 간 나! 갑자기 옆사람이 다른 칵테일이 맛있다며 시켜보라 한다면?",
		"처음보는 바텐더가 나와 얘기중 나를 너무 칭찬한다.",
	],
	options: {
		S: [
			"클래식하게 정량에 맞는 칵테일을 만드는 바텐더",
			"해피엔딩으로 끝나는 실존 인물을 바탕으로 한 명작 영화",
			"갑자기? 술 취했나…",
			"원래 먹는 게 최애니 굳이 시도하지 않는다.",
			"나를 칭찬하니 고마워한다."
		],
		N: [
			"매번 독특한 레시피로 칵테일을 만드는 바텐더",
			"열린 결말의 영상미 있는 판타지 영화",
			"평소 생각했던 죽음에 대한 내 생각을 말해준다.",
			"맛이 궁금하다! 주문해본다.",
			"술먹고 실수하지 않도록 실망할까봐 조심하게 된다."
		]
	},
};

const NATURE_QUESTIONS: QuestionsType = {
	questions: [
		"둘 중에 골라야 한다면 어떤 칵테일 바?",
		"비싸보이는 칵테일 잔에 술을 먹던 당신, 마감 시간 직전에 실수로 떨어뜨렸다. 당신의 속마음은?",
		"어색한 무리가 같이 술을 먹자고 한다.",
		"펍에서 오랜만에 친구를 만났다. '노는것만 좋아하는 거 같았는데, 돈 많이 벌었나보네? 멋있다~!' 당신의 대답은?",
		"우울하니 술 먹으러 가자는 친구. 당신의 대답은?",
	],
	options: {
		T: [
			"편안한 소파 좌석이지만 노래장르가 뒤죽박죽",
			"죄송하지만, 깨뜨린 잔 값이 궁금하다.",
			"한번 고민해볼게! (정말 고민해보고 알려준다.)",
			"고마워~ 돈 좀 벌었어",
			"어느 술집 갈래?"
		],
		F: [
			"분위기 있지만 등받이가 없는 좌석",
			"나 때문에 집에 늦게 가시는 거 아닌가 걱정한다.",
			"한번 생각해볼게! (거절하고 싶은 마음이 있다…)",
			"(언짢음..) 놀기만 한건 아니야~",
			"왜ㅠㅠ 무슨일이야?"
		]
	},
};

const TACTICS_QEUSTIONS: QuestionsType = {
	questions: [
		"집에서 쉬고 있는데 갑자기 친한 친구가 펍으로 나오라 한다면?",
		"칵테일 메뉴 중, 단 하나만을 주문해야 한다면?",
		"칵테일을 먹고 해야할 일이 생각나 집에 들어온 당신, 제일 먼저 할 일은?",
		"안주 킬러인 당신, 펍에서 주문하려 했던 메뉴가 품절되었다면?",
		"서비스를 많이 주는 단골 펍에 가고 있는데, 바로 반대편에 칵테일 펍이 생겼다. 1+1 이벤트 중이라면?",
	],
	options: {
		J: [
			"나갈 준비가 안되었으니 안나간다.",
			"원래 먹으려고 했던 칵테일을 주문한다.",
			"해야할 일의 순서를 먼저 정리해본다.",
			"비슷한 메뉴를 파는 펍을 찾아본다.",
			"약속한 장소인 단골 펍으로 간다."
		],
		P: [
			"할 것도 없는데 일단 나간다고 한다.",
			"아무거나. 오늘의 추천 칵테일이나 먹고 싶은 칵테일을 주문한다.",
			"일단 빨리 시작해본다.",
			"일단 들어가서 생각해본다.",
			"친구를 설득해 새로운 펍에 가본다."
		]
	},
}

const questionFlatter = (obj: QuestionsType): Question[] => {
	const {questions, options } = obj;
	const types = Object.keys(options);
	const result = questions.map((q, idx) => ({ question: q, options: types.map(t => ({type: t, answer: options[t][idx]}))}))
	return result;
}

const QUESTIONS: ReadonlyArray<Question> = [
	...questionFlatter(MIND_QUESTIONS),
	...questionFlatter(ENERGY_QUESTIONS),
	...questionFlatter(NATURE_QUESTIONS),
	...questionFlatter(TACTICS_QEUSTIONS),
];

export default null;
export {
  QUESTIONS,
};