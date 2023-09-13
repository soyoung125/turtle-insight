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
