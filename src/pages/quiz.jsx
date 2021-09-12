import React, { useState, useEffect, useContext } from "react"
import ContextQuiz from '../store/context-quiz';
import CardStackComp from "../components/card-stack-comp/card-stack-comp"
import ScoreBoardComp from '../components/score-board-comp/score-board-comp';
import ModalMask from '../layouts/modal-comp/modal-mask';
import { FETCH_PATH } from "../shared/constants" 

//  on load copy all questions to new array
//  - will add topic filter later
//  print new array
//  - local storage
//  - context first card

function QuizPage() {
    const quizCtx = useContext(ContextQuiz);
    const [error, setError] = useState(null);
    const[ isLoaded, setIsLoaded ] = useState(false);
    const[ questionList, setQuestionList ] = useState([]);
    const[ qCount, setQCount ] = useState();
    const[ isFinished, setIsFinished ] = useState(false);
    const [ modalVisy, setModalVisy ] = useState(false);

    let curQ = quizCtx.quizIndex;

    function closeModalWindow () {
        setIsFinished(false);
        setModalVisy(false);
        console.log("close-a modal");
    }

    function closeAndResetQuiz () {
        setQCount(0);
        setIsFinished(false);
        setModalVisy(false);
        console.log("close-a modal");
    }

    useEffect(() => {
        console.log("use effect test");
        fetch('http://localhost:1337/flashcards').then(responce => { 
            return responce.json();
        }).then(
        (data) => {
            // 2do:  error handling here 
            // 3:10 spread version
            setIsLoaded(true);
            console.log(FETCH_PATH);
            console.log(data);
            setQuestionList(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        });
    },[]);

    useEffect(() => {
        setQCount(questionList.length);
        console.log(`setQCount: ${qCount}`);
    },[questionList]);

    useEffect(() => {
        if (curQ >= qCount ) {
            setIsFinished(true);
            setModalVisy(true);
            console.log(`Yay done, reached: ${curQ} of ${qCount}`);
        } else {
            console.log(`Keep going: on no. ${curQ} of ${qCount}`);
        } ;
        // console.log(`revealedCount: ${revealedCount}`);
        // console.log(`missedCount: ${missedCount}`);
        // console.log(`correctCount: ${correctCount}`);
    },[curQ]);


    return (
        <>
        <section>
            { error && <p>Could not Load Data at this time</p> }
            { !isLoaded && <p>Loading your next question...</p> }
            { questionList && <CardStackComp meets={questionList}></CardStackComp> }
            { isFinished && 
                <ScoreBoardComp
                    className={ modalVisy ? "modalStyle" : "cardStyle"}
                    onCancel={closeModalWindow}
                    onReset={closeAndResetQuiz}
                    >
                </ScoreBoardComp>
            }
            
               {/* {
                    DUMMY_DATA.map((item, index) => {
                        return(
                            <li key={item.id}>
                                <h3>{item.title}</h3> 
                                <p>{item.description}</p>
                            </li>
                        )
                    })
                }
                </ul>
            */}    
        </section>
        { modalVisy && <ModalMask onCancel={closeModalWindow} /> } 
        </>
       )
}

export default QuizPage;

