import { useEffect, useState } from 'react';
import {
    useRecoilValue, useRecoilState,
} from 'recoil';
import { testResultState } from '../../app/recoil/test';
import { mbtiState } from '../../app/recoil/mbti';
import '../../style/Result.css';
import { COCKTAILS, COCKTAIL_INFO } from '../../domain/constants/cocktails';

function Result() {
    const [isLoading, setIsLoading] = useState(true);
    const [mbti, setMbti] = useRecoilState(mbtiState);
    const getResultType = useRecoilValue(testResultState);
    const cocktail_info = COCKTAIL_INFO[mbti];

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
                        <img src={COCKTAILS[mbti]} className="main_cocktail" alt="main cocktail" />
                        <div className="menu">BEST<br />MENU</div>
                    </div>

                    <div className='paper cocktail_info'>
                        <div className='cocktail_name'>{cocktail_info.name}</div>
                        <div className='tags'>
                            {cocktail_info.tags.map(t => <div className='tag_shape'><div className='tag_value'>{`#${t}`}</div></div>)}
                        </div>
                        <p className='description'>{cocktail_info.description}</p>
                    </div>

                    <div className='paper description'>
                        <b>나의 성격은?</b>
                        <p>{cocktail_info.personality}</p>
                    </div>

                    <div className='paper description'>
                        <b>나의 성격은?</b>
                        <p>{cocktail_info.characteristic}</p>
                    </div>

                    <div className='recommendation'>
                        <div className='sub_cocktail'>
                            <img src={COCKTAILS[cocktail_info.good]} className="sub_cocktail_img" alt="best sub cocktail" />
                            <div className='sub_type'>GOOD</div>
                            <div className="sub_cocktail_name">{COCKTAIL_INFO[cocktail_info.good].name}</div>
                        </div>
                        <div className='sub_cocktail'>
                            <img src={COCKTAILS[cocktail_info.bad]} className="sub_cocktail_img" alt="worst sub cocktail" />
                            <div className='sub_type'>BAD</div>
                            <div className="sub_cocktail_name">{COCKTAIL_INFO[cocktail_info.bad].name}</div>
                        </div>
                    </div>
                </div>}
        </>
    );
}

export default Result;
