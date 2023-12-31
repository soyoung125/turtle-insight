import {
    atom,
} from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const mbtiState = atom<string>({
    key: 'mbti',
    default: '',
    effects_UNSTABLE: [persistAtom],
});
