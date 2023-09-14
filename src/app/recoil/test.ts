import {
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import { MbtiTest } from '../../types/mbti';
import { TYPES } from '../../domain/constants/questions';

// export const testState = atom<MbtiTest>({
//     key: 'test',
//     default: {
//         mind: {
//             E: 0,
//             I: 0,
//         },
//         energy: {
//             S: 0,
//             N: 0,
//         },
//         nature: {
//             T: 0,
//             F: 0,
//         },
//         tactics: {
//             J: 0,
//             P: 0,
//         },
//     },
// });

export const testState = atom<string[]>({
    key: 'test',
    default: [],
});

// export const testResultState = selector({
//     key: "testResultState",
//     get: ({ get }) => {
//         const data = get(testState);

//         const getResultType = () => {
//             const types = Object.keys(data);
//             let mbti = '';
//             types.map((type) => {
//                 const value = data[type];
//                 const nestedType = Object.keys(value);
//                 if (value[nestedType[0]] > value[nestedType[1]]) {
//                     mbti += nestedType[0];
//                 } else {
//                     mbti += nestedType[1];
//                 }
//             })
//             return mbti;
//         };
//         return getResultType;
//     }
// })

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
                } else {
                    mbti += var2[0];
                }
            })
            return mbti;
        };
        
        return getResultType;
    },
})