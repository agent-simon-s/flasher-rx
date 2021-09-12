import React, { useState, useContext, useRef } from "react";
import PropTypes from 'prop-types';
import ContextQuiz from '../../store/context-quiz';
import ContentCardComp from '../../layouts/content-card/card-comp';
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
    const {
        key,
        id,
        ndx,
        count,
        className = '',
        topic,
        poser,
        choices,
        hint,
        img,
        asked
    } = props;

    const quizCtx = useContext(ContextQuiz);
    const isAsked = quizCtx.isQsRevealed;
    // const isAsked = quizCtx.isQsAsked;
    // const isAsked = quizCtx.isQsRevealed;
    // const[ isActive, setIsActive] = useState(false);
    const[ isFlipped, setIsFlipped ] = useState(false);
    // const[ wasFlipped, setWasFlipped ] = useState(false);
    const[ myChoice, setChosen ] = useState(null);
    const[ choiceValid, setChoiceValid ] = useState(null);
    const[ myAnswerIs, setMyAnswerIs ] = useState(null);
    // const[ isCorrect, setIsCorrect] = useState(null);
    const[ isRevealed, setIsRevealed] = useState(false);
    // let toggleFavCopy = '[+]';
    const myRef = useRef(ndx);

    let curQ = quizCtx.quizIndex;
    let missedCount = quizCtx.totalMissed;

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
                key: id,
                id: id, 
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

    function selectAnswer(choice, validity ) {
        console.log(`select ${choice} is ${validity}`);
        setChosen(choice);
        setChoiceValid(validity);
    }

    function checkAnswer() {
        console.log(`choice ${myChoice} is ${choiceValid} `);
        setMyAnswerIs(choiceValid);
        setIsRevealed(true);
        if (!choiceValid) {
            quizCtx.addQsToMissed({
                key: id,
                id: id, 
                index: ndx
            });   
        }
        
        //myChoice ? quizCtx.addQsToMissed(); id
        console.log(`check answer ${myAnswerIs}`);
        //id
    }

    function nextQuestionPlease() {
        quizCtx.incQuizIndex();
        scrollToCurrent(curQ);
        console.log("next Question Please");
    }

    return (
        <li 
            key={id} 
            className={ `${(ndx === curQ) ? "active" : ""}${(ndx < curQ) ? "answered" : ""}${(ndx > curQ) ? "unasked" : ""}` }>
            <ContentCardComp>
                {/*  FRONT */}
                <div className="card-front" autoFocus={(ndx === curQ) ? true : false}>
                    <h3 className='detail-title'>{poser}?</h3> 
                    <span className="qcount">{topic} | { ndx + 1 }/{count}   <span className='wong'>{missedCount}</span></span>
                    <div className='detail'>
                        <div className='detail-info'> 
                            <ol ref={myRef}>
                            {
                                choices.map((item,index) => {
                                    return(
                                        <li 
                                            key={index} 
                                            onClick={() => selectAnswer(index, item.is) }
                                            className={ `${(myChoice === index) ? "chosen" : ""}
                                                        ${(isRevealed && item.is) ? "correct" : ""} 
                                                        ${(isRevealed && !item.is) ? "incorrect" : ""}
                                                        ${(myChoice === index && isRevealed && !item.is) ? "wrong" : ""}`
                                                    }>
                                            {item.text}
                                        </li>
                                    )
                                })
                            }
                            </ol> 
                        </div>
                        <div className='detail-thumb'>
                            <img src={img[0].src} alt={img[0].alt} />
                        </div>
                    </div>
                </div>
                    
                {/*  BACK */}
                { isFlipped && (
                <div className="card-back">
                    <h3 className='detail-title'>{poser}?</h3> 
                    <span className="qcount">{topic} | { ndx + 1 }/{count}</span>
                    <div className='detail'>
                        <div className='detail-info'> 
                            <p>{hint}</p> 
                        </div>
                        <div className='detail-thumb'>
                             {/* <img src={img[0].src} alt={img[0].alt} /> */}
                        </div>
                    </div>
                </div>
                )}
                <div className='detail-action'>
                    <button className='btn-action' onClick={flipCard}>
                        Turn Over
                    </button>
                    <button onClick={() => checkAnswer(id)} disabled={ isRevealed || myChoice === null }>
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
};


QuestionDetailComp.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string,
  ndx: PropTypes.number,
  count: PropTypes.number,
  className: PropTypes.string,
  topic: PropTypes.string,
  poser: PropTypes.string,
  choices: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  hint: PropTypes.string,
  img: PropTypes.string,
  asked:PropTypes.bool
};

export default QuestionDetailComp;