//import React, { useState, useContext, useRef } from "react";
import React, { useContext } from "react";
import ContextQuiz from '../../store/context-quiz';
import ContentCardComp from '../content-card/card-comp.jsx';
import './question-detial-comp.scss';

function ScoreCardComp(props) {
    const quizCtx = useContext(ContextQuiz);

    let curQ = quizCtx.quizIndex;
    let missedCount = quizCtx.totalMissed;

    return ();
}

export default ScoreCardComp;