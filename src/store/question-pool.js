import { createContext, useState } from 'react';
import { FETCH_PATH } from "../shared/constants";
//import { Flashcards } from "../constants/dummy-data.js";
import { Flashcards } from "../constants/fallback-data.js";


const ContextQuiz = createContext({
    answered: [],
    revealed: [],
    totalRevealed: 0,
    totalAnswered: 0,
    totalCorrect: 0,
    totalWrong: 0
});

export function ProviderContextQuestionPool(props) {
    const [error, setError] = useState(null);
    const[ isPoolLoaded, setIsPoolLoaded ] = useState(false);
    const[ questionPool, setQuestionPool ] = useState([]);
    const[ qCount, setQCount ] = useState();
    const[ isFinished, setIsFinished ] = useState(false);


    function getTopicsAvailable() {
        //do stuff
    }

    function loadFallBackData() {
        if (Flashcards.length >1 ) {
            setIsPoolLoaded(true);
            console.log(Flashcards);
            setQuestionList(Flashcards);
        }
    }

    function fetchQuestionPool(){
        console.log("use effect test");
        console.log(FETCH_PATH);
        fetch(FETCH_PATH).then(responce => { 
            return responce.json();
        }).then(
        (data) => {
            // 2do:  error handling here 
            // 3:10 spread version
            setIsPoolLoaded(true);
            console.log(FETCH_PATH);
            console.log(data);
            setQuestionList(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          loadFallBackData();
        });
    }


    const context = {
        // revealed: qRevealed,
        // totalRevealed: qRevealed.length,
        // addQuiz: addQuizHandler,
        // isQsAsked: isQsRevealedHandler
    };


    return (
        <ContextQuiz.Provider value={context}>
            {props.children}
        </ContextQuiz.Provider>
    );
}

export default ContextQuiz;