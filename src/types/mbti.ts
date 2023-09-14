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