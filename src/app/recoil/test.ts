import {
    atom,
    selector,
} from 'recoil';
import { TYPES } from '../../domain/constants/questions';

export const testState = atom<string[]>({
    key: 'test',
    default: [],
});

export const testResultState = selector({
    key: "testResultState",
    get: ({ get }) => {
        const data = get(testState);
        console.log(data);

        const getResultType = () => {
            const types = Object.keys(TYPES);
            let mbti = '';

            types.map((type) => {
                const var1 = data.filter((d) => d === TYPES[type][0])
                const var2 = data.filter((d) => d === TYPES[type][1])
                if (var1.length > var2.length) {
                    mbti += var1[0];
                } else if (var1.length < var2.length) {
                    mbti += var2[0];
                } else {
                    return '';
                }
            })
            return mbti;
        };
        
        return getResultType;
    },
})