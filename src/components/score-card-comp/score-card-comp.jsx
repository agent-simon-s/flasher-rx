//import React, { useState, useContext, useRef } from "react";
import React, { useContext, useState, useEffect } from "react";
import ContextQuiz from '../../store/context-quiz';
import ContentCardComp from '../../layouts/content-card/card-comp';
import './score-card-comp.scss';

function ScoreCardComp(props) {
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

    //is it better to have this waterfall from correctCount or include in the above
    // useEffect(() => {
    //     console.log(`correctCount: ${correctCount}`);
    //     if (curQ >= 1) {
    //         setAverageScore((correctCount / curQ) * 100);
    //     } else {
    //         setAverageScore(0);
    //     } ;
    // },[curQ]);

    return (
        <div className="running-scorecard">
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
        </div>
        );
}

export default ScoreCardComp;