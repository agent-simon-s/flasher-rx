//import React, { useState, useContext, useRef } from "react";
import React, { useContext, useState, useEffect } from "react";
import ContextQuiz from '../../store/context-quiz';
import ContentCardComp from '../../layouts/content-card/card-comp';
import './score-board-comp.scss';

function ScoreBoardComp(props) {
    const quizCtx = useContext(ContextQuiz);
    const[ correctCount, setCorrectCount ] = useState(0);
    const[ averageScore, setAverageScore ] = useState(0);

    let curQ = quizCtx.quizIndex;
    let missedCount = quizCtx.totalMissed;
    let revealedCount = quizCtx.totalRevealed;

    //is it depend on context's quizCtx.totalRevealed or const revealedCount

   const percent = (num, denom) => {
       return Math.round((num / denom) * 100);
   }

   const closeHandler = () => {
       //do stuff
   }

    useEffect(() => {
        if (curQ >= 1) {
            setCorrectCount(( curQ - missedCount ));
            setAverageScore( percent(correctCount, curQ) );
        } else {
            setAverageScore(0);
        } ;
        // console.log(`revealedCount: ${revealedCount}`);
        // console.log(`missedCount: ${missedCount}`);
        // console.log(`correctCount: ${correctCount}`);
    },[curQ]);



    return (
        <>
        <div className="result-scorecard content-container-card">
            <button className='btn btn-close' onClick={props.onCancel}>(X)</button>
            <div className="in-result-scorecard">
                    <h2>Congratualtions You Finished</h2> 
                    You got {averageScore}% right!
                <ul>
                    <li>
                        <span className="label">wrong</span>
                        <h4 className="wrong">{missedCount}</h4>
                    </li>
                    <li>
                        <span className="label">right</span>
                        <h4 className="right">{correctCount}</h4>
                    </li>
                    <li className="score">
                        <span className="label">AVERAGE</span>
                        <h4 className="score">{averageScore}%</h4>
                    </li>
                </ul>
                <button onClick={props.onReset}>RESET</button>
            </div>
        </div>
        </>

        );
}

export default ScoreBoardComp;