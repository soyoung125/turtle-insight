import { useEffect, useState } from 'react';
import {
    useRecoilValue, useRecoilState, useResetRecoilState,
} from 'recoil';
import { testResultState, testState } from '../../app/recoil/test';
import { mbtiState } from '../../app/recoil/mbti';

function Result() {
    const [isLoading, setIsLoading] = useState(true);
    const [mbti, setMbti] = useRecoilState(mbtiState);
    const getResultType = useRecoilValue(testResultState);

    useEffect(() => {
        if (mbti === '') {
            setMbti(getResultType());
        } else {
            setIsLoading(false);
        }
    }, [mbti]);

    return (
        <>
            {isLoading ? <div>isloading</div> : <div>{mbti}</div>}
        </>
    );
}

 export default Result;
