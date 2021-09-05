import React, { useState, useEffect, useContext } from "react";
import ContextQuiz from '../../store/context-quiz';
import ContentCardComp from '../content-card/card-comp.jsx';
import './question-detial-comp.scss';

// Notes:
// Add  myAnswerIs constant
// Add check values vs myAnswerIs
// Add check & x icons on reveal
// Add functn to 'ask' first question in array
// reset function
// back button
// counter / progress tracker
// score tracker 

function QuestionDetailComp(props) {
    const quizCtx = useContext(ContextQuiz);
    const isAsked = quizCtx.isQsAsked(props.id);

    //const[ isActive, setIsActive] = useState(false);
    const[ isFlipped, setIsFlipped ] = useState(false);
    const[ wasFlipped, setWasFlipped ] = useState(false);
    const[ chosen, setChosen ] = useState(null);
    const[ myAnswerIs, setMyAnswerIs ] = useState(null);
    const[ isCorrect, setIsCorrect] = useState(null);
    const[ isRevealed, setIsRevealed] = useState(false);
    //let toggleFavCopy = '[+]';

    function toggleAskedHandler() { 
        if(isAsked) {
            console.log("is asked");
        } else {
            quizCtx.addQuiz({
                key: props.id,
                id: props.id, 
            })
        }
    }


    function flipCard () {
        if (isFlipped) {
            setIsFlipped(false);
        } else {
            setIsFlipped(true);
            setWasFlipped(true);
            setIsRevealed(true);
        }
        console.log("flip");
    }

    function selectAnswer(choice, validity) {
        console.log(`select ${choice} is ${validity}`);
        setMyAnswerIs(choice);
    }

    function checkAnswer(answer) {
        setIsRevealed(true);
        console.log(`check ${answer}`);
    }

    function nextQuestionPlease() {
        // setIsRevealed(true);
        // setMyAnswerIs(null);
    }

    return (
        <li key={props.id}>
            <ContentCardComp>
                {/*  FRONT */}
                { true && (
                <div className="card-front">
                    <h3 className='detail-title'>{props.poser}?</h3> 
                    <span className="qcount">{props.topic} | { props.ndx + 1 }/{props.count}</span>
                    <div className='detail'>
                        <div className='detail-info'>
                            <ol>
                            {
                                props.choices.map((item,index) => {
                                    return(
                                        <li 
                                            key={index} 
                                            onClick={() => selectAnswer(index, item.is) }
                                            className={ `${(myAnswerIs == index) ? "chosen" : ""}
                                                        ${(isRevealed && item.is) ? "correct" : ""} 
                                                        ${(isRevealed && !item.is) ? "incorrect" : ""}
                                                        ${(myAnswerIs == index && isRevealed && !item.is) ? "wrong" : ""}`
                                                    }>
                                            {item.text}
                                        </li>
                                    )
                                })
                            }
                            </ol> 
                            {/*<div className='detail-info'> 
                                <p>{props.choices[0].text}</p>
                                <p>{props.choices[1].text}</p>
                                <p>{props.choices[2].text}</p>
                                <p>{props.choices[3].text}</p>
                            </div>*/}
                        </div>
                        <div className='detail-thumb'>
                            <img src={props.img[0].src} alt={props.img[0].alt} />
                        </div>
                    </div>
                </div>
                )}
                    
                {/*  BACK */}
                { isFlipped && (
                <div className="card-back">
                    <h3 className='detail-title'>{props.poser}?</h3> 
                    <span className="qcount">{props.topic} | { props.ndx + 1 }/{props.count}</span>
                    <div className='detail'>
                        <div className='detail-info'> 
                            <p>{props.hint}</p> 
                        </div>
                        <div className='detail-thumb'>
                             {/* <img src={props.img[0].src} alt={props.img[0].alt} /> */}
                        </div>
                    </div>
                </div>
                )}
                <div className='detail-action'>
                    <button className='btn btn-close' onClick={flipCard}>
                        Turn Over
                    </button>
                    <button onClick={checkAnswer} disabled={ isRevealed || myAnswerIs === null }>
                        Answer
                    </button>
                    <button onClick={nextQuestionPlease} disabled={!isRevealed}>
                        Next
                    </button>
                    <button onClick={toggleAskedHandler}>
                        {isAsked ? '[-]' : '[+]'}
                    </button>
                </div>
            
            </ContentCardComp>
        </li>
    )
}

export default QuestionDetailComp;