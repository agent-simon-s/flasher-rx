import React, { useState, useContext, useRef } from "react";
import ContextQuiz from '../../store/context-quiz';
import ContentCardComp from '../content-card/card-comp.jsx';
import './question-detial-comp.scss';

// Notes:
// x Add  myAnswerIs constant
// x Add check values vs myAnswerIs
// x Add check & x icons on reveal
// x Add functn to 'ask' first question in array
// x reset function
// _ back button
// x counter / progress tracker
// _ score tracker 

function QuestionDetailComp(props) {
    const quizCtx = useContext(ContextQuiz);
    const isAsked = quizCtx.isQsAsked;
    //const[ isActive, setIsActive] = useState(false);
    const[ isFlipped, setIsFlipped ] = useState(false);
    //const[ wasFlipped, setWasFlipped ] = useState(false);
    const[ myChoice, setChosen ] = useState(null);
    const[ myAnswerIs, setMyAnswerIs ] = useState(null);
    //const[ isCorrect, setIsCorrect] = useState(null);
    const[ isRevealed, setIsRevealed] = useState(false);
    //let toggleFavCopy = '[+]';
    const myRef = useRef(props.ndx);

    let curQ = quizCtx.quizIndex;

    const scrollToCurrent = () => myRef.current.scrollIntoView()    
   // run this function from an event handler or an effect to execute scroll 

    // useEffect(() => {
    //     console.log(`new card is ${curQ}`);
    //     scrollToCurrent(curQ);
    // },[ curQ ]);

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
            //setWasFlipped(true);
            setIsRevealed(true);
        }
        console.log("flip");
    }

    function selectAnswer(choice, validity) {
        console.log(`select ${choice} is ${validity}`);
        setChosen(choice);
        //setMyAnswerIs(choice);
    }

    function checkAnswer() {
        setIsRevealed(true);
        setMyAnswerIs(myChoice);
        console.log(`check ${myAnswerIs}`);
        //console.log(`check ${answer}`);
    }

    function nextQuestionPlease() {
        quizCtx.incQuizIndex();
        scrollToCurrent(curQ);
        console.log("next Question Please");
    }

    return (
        <li 
            key={props.id} 
            className={ `${(props.ndx === curQ) ? "active" : ""}${(props.ndx < curQ) ? "answered" : ""}${(props.ndx > curQ) ? "unasked" : ""}` }>
            <ContentCardComp>
                {/*  FRONT */}
                <div className="card-front" autoFocus={(props.ndx === curQ) ? true : false}>
                    <h3 className='detail-title'>{props.poser}?</h3> 
                    <span className="qcount">{props.topic} | { props.ndx + 1 }/{props.count}</span>
                    <span> {props.ndx} ==? {curQ} </span>
                    <div className='detail'>
                        <div className='detail-info'> 
                            <ol ref={myRef}>
                            {
                                props.choices.map((item,index) => {
                                    return(
                                        <li 
                                            key={index} 
                                            onClick={() => selectAnswer(index, item.is) }
                                            className={ `${(myChoice === index) ? "chosen" : ""}
                                                        ${(isRevealed && item.is) ? "correct" : ""} 
                                                        ${(isRevealed && !item.is) ? "incorrect" : ""}
                                                        ${(myAnswerIs === index && isRevealed && !item.is) ? "wrong" : ""}`
                                                    }>
                                            {item.text}
                                        </li>
                                    )
                                })
                            }
                            </ol> 
                        </div>
                        <div className='detail-thumb'>
                            <img src={props.img[0].src} alt={props.img[0].alt} />
                        </div>
                    </div>
                </div>
                    
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
                    <button onClick={checkAnswer} disabled={ isRevealed || myChoice === null }>
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