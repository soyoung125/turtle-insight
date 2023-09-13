import {
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

const mbtiState = atom({
    key: 'mbti',
    default: '',
});
