import {
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import { MbtiTest } from '../../types/mbti';

export const testState = atom<MbtiTest>({
    key: 'test',
    default: {
        mind: {
            E: 0,
            I: 0,
        },
        energy: {
            S: 0,
            N: 0,
        },
        nature: {
            T: 0,
            F: 0,
        },
        tactics: {
            J: 0,
            P: 0,
        },
    },
});

export const testResultState = selector({
    key: "testResultState",
    get: ({ get }) => {
        const data = get(testState);

        const getResultType = () => {
            const types = Object.keys(data);
            let mbti = '';
            types.map((type) => {
                const value = data[type];
                const nestedType = Object.keys(value);
                if (value[nestedType[0]] > value[nestedType[1]]) {
                    mbti += nestedType[0];
                } else {
                    mbti += nestedType[1];
                }
            })
            return mbti;
        };
        return getResultType;
    }
})
