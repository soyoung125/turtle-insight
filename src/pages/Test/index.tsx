import { useState } from "react";
import { QUESTIONS } from "../../domain/constants/questions";
import '../../style/Test.css'

function Test() {
    const question_box = QUESTIONS.map((q, idx) => (
        <div key={idx}>
            <div className="top">
                <div className="question_number">Q{idx + 1}</div>
                <div className="smallBtn" onClick={() => setStep(step - 1)}>뒤로가기</div>
            </div>
            <div className="rounded_box white_border question">{q.question}</div>
            <div className="divider">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="10" viewBox="0 0 327 6" fill="none">
                    <path d="M0.583333 3C0.583333 4.47276 1.77724 5.66667 3.25 5.66667C4.72276 5.66667 5.91667 4.47276 5.91667 3C5.91667 1.52724 4.72276 0.333333 3.25 0.333333C1.77724 0.333333 0.583333 1.52724 0.583333 3ZM325.75 3.5C326.026 3.5 326.25 3.27614 326.25 3C326.25 2.72386 326.026 2.5 325.75 2.5V3.5ZM3.25 3.5H325.75V2.5H3.25V3.5Z" fill="white" />
                </svg>
            </div>
            {q.options.map((option) => <div className="rounded_box option" key={Math.random()} onClick={() => setStep(step+1)}>{option.answer}</div>)}
        </div>
    ))
    const [step, setStep] = useState(0);

    return (
        <>
            {question_box[step]}

            <div>range: {step/20*100}%</div>
        </>
    );
}

export default Test;
