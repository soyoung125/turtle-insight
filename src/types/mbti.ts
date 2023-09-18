export interface QuestionsType {
	type: string,
	questions: string[],
	options: {[key: string]: string[]},
}

export interface Question {
	type: string,
	question: string,
	options: {
        type: string;
        answer: string;
    }[],
}

export interface MBTIINFO {
	name: string,
	tags: string[],
	description: string[],
	personality: string,
	characteristic: string,
	good: string,
	bad: string,
	name_color: string,
	tag_color: string,
}