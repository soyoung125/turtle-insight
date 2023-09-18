import { useEffect, useState } from 'react';
import {
    useRecoilValue, useRecoilState,
} from 'recoil';
import { testResultState } from '../../app/recoil/test';
import { mbtiState } from '../../app/recoil/mbti';
import '../../style/Result.css';
import { COCKTAILS, COCKTAIL_INFO } from '../../domain/constants/cocktails';
import { useNavigate, useParams } from 'react-router-dom';
import PATH from '../../domain/constants/path';

function Result() {
    const navigate = useNavigate();
    const { mbti_type } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [testResult, setTestResult] = useRecoilState(mbtiState);
    const getResultType = useRecoilValue(testResultState);

    const mbti = mbti_type ? mbti_type : testResult;
    const cocktail_info = COCKTAIL_INFO[mbti];

    useEffect(() => {
        const result = getResultType();

        // if (result === '') {
        //     return;
        // }

        if (result === testResult) {
            setIsLoading(false);
        } else {
            setTestResult(result);
        }
    }, [testResult]);

    const handleClickRecommend = (recommended_mbti: string) => {
        navigate(`/result/${recommended_mbti}`);
    }

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
                        <div className='cocktail_name' style={{color: cocktail_info.name_color}}>{cocktail_info.name}</div>
                        <div className='tag_shape'>
                            {cocktail_info.tags.map(t => <p className='tag_value' style={{color: cocktail_info.tag_color}}> {`#${t}`} </p>)}
                        </div>
                        <p className='description'>{cocktail_info.description}</p>
                    </div>

                    <div className='personality_info'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="5" viewBox="0 0 4 5" fill="none">
                            <circle cx="2" cy="2.5" r="2" fill="white" />
                        </svg>
                        {`  `}나의 성격은?
                        <div className='paper contents'>
                            <p>{cocktail_info.personality.map(p => <div>{p}</div>)}</p>
                        </div>
                    </div>

                    <div className='personality_info'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="5" viewBox="0 0 4 5" fill="none">
                            <circle cx="2" cy="2.5" r="2" fill="white" />
                        </svg>
                        {`  `}나는 술자리에서?
                        <div className='paper contents'>
                            <p>{cocktail_info.characteristic.map(c => <div>{c}</div>)}</p>
                        </div>
                    </div>

                    <div className='recommendation'>
                        <div className='sub_cocktail' onClick={() => handleClickRecommend(cocktail_info.good)}>
                            <img src={COCKTAILS[cocktail_info.good]} className="sub_cocktail_img" alt="best sub cocktail" />
                            <div className='sub_type'>GOOD</div>
                            <div className="sub_cocktail_name">{COCKTAIL_INFO[cocktail_info.good].name}</div>
                        </div>

                        <div className='sub_cocktail' onClick={() => handleClickRecommend(cocktail_info.bad)}>
                            <img src={COCKTAILS[cocktail_info.bad]} className="sub_cocktail_img" alt="worst sub cocktail" />
                            <div className='sub_type'>BAD</div>
                            <div className="sub_cocktail_name">{COCKTAIL_INFO[cocktail_info.bad].name}</div>
                        </div>
                    </div>

                    <div className='extra'>
                        <div className='smallBtn' onClick={() => navigate(PATH.test)}>다시하기</div>
                        <div>출처 : https://namu.wiki/w</div>
                        <div>문의 및 광고 제안하기📬</div>
                    </div>

                    <div className='floating_area'>
                        <div className='floating_btn'>
                            <span className="material-symbols-outlined">
                                ios_share
                            </span>
                        </div>
                        <div className='floating_btn'>
                            <span className="material-symbols-outlined">
                                download
                            </span>
                        </div>
                    </div>
                </div>}
        </>
    );
}

export default Result;
