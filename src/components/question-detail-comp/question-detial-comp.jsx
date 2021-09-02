import React, { useState, useEffect } from "react";
import ContentCardComp from '../content-card/card-comp.jsx';
import './question-detial-comp.css';


// Notes:
// Add  myAnswerIs constant
// Add check values vs myAnswerIs
// Add check & x icons on reveal
// Add functn to 'ask' first question in array
// reset fucntion
// back button
// counter / progress tracker
// score tracker 

function QuestionDetailComp(props) {
    //const[ isActive, setIsActive] = useState(false);
    //const[ isAsked, setIsAsked] = useState(false);
    const[ isFlipped, setIsFlipped ] = useState(false);
    const[ myAnswerIs, setMyAnswerIs ] = useState(null);
    const[ isCorrect, setIsCorrect] = useState(null);
    const[ isRevealed, setIsRevealed] = useState(false);
    //let toggleFavCopy = '[+]';


    function flipCard () {
        if (isFlipped) {
            setIsFlipped(false);
        } else {
            setIsFlipped(true);
        }
        console.log("flip");
    }

    function selectAnswer(answer) {
        console.log(`select ${answer}`);
        setMyAnswerIs(answer);
    }

    function checkAnswer(answer) {
        setIsRevealed(true);
        console.log(`check ${answer}`);
    }

    function nextQuestionPlease() {
        setIsRevealed(true);
        setMyAnswerIs(null);
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
                                            onClick={() => selectAnswer(item.is) }
                                            className={ `${(isRevealed && item.is) ? "correct" : ""} 
                                                        ${(isRevealed && !item.is) ? "wrong" : ""}
                                                        ${(isRevealed && false && !item.is) ? "wrong" : ""}`
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
                            <img src={props.img[0].src} alt={props.img[0].alt} />
                        </div>
                    </div>
                </div>
                )}
                <div className='detail-action'>
                    <button className='btn btn-close' onClick={flipCard}>
                        Turn Over
                    </button>
                    <button onClick={checkAnswer}>
                        Answer
                    </button>
                    <button onClick={nextQuestionPlease}>
                        Next
                    </button>
                    <button>
                        [+]Topic: {props.topic}
                    </button>
                </div>
            
            </ContentCardComp>
        </li>
    )
}

export default QuestionDetailComp;