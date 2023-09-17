import { useEffect, useState } from 'react';
import {
    useRecoilValue, useRecoilState,
} from 'recoil';
import { testResultState } from '../../app/recoil/test';
import { mbtiState } from '../../app/recoil/mbti';
import '../../style/Result.css';
import { COCKTAILS } from '../../domain/constants/cocktails';

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
            {isLoading
                ? <div>isloading</div>
                : <div>
                    <div className='menu_top'>
                        <img src={COCKTAILS[mbti]} className="main_cocktail" alt="turtleinsight logo" />
                        <div className="menu">BEST<br />MENU</div>
                    </div>

                    <div className='paper cocktail_info'>
                        <div className='cocktail_name'>cocktail name</div>
                        <div className='tag'><div className='tag_value'>tag</div></div>
                        <div className='description'>content</div>
                    </div>

                    <div className='paper description'>
                        <div>content</div>
                    </div>

                    <div className='recommendation'>
                        <div>
                            cocktail img
                            <div>cocktail name</div>
                        </div>
                        <div>
                            cocktail img
                            <div>cocktail name</div>
                        </div>
                    </div>
                </div>}
        </>
    );
}

export default Result;
