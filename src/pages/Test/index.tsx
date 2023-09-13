import { useState } from "react";
import { QUESTIONS } from "../../domain/constants/questions";

function Test() {
    const question_box = QUESTIONS.map((q, idx) => (
        <div key={idx}>
            <div>
                <div>Q{idx + 1}</div>
                <button>뒤로가기</button>
            </div>
            <div>{q.question}</div>
            <br />
            {q.options.map((option) => <div key={Math.random()} onClick={() => setStep(step+1)}>{option.answer}</div>)}
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
