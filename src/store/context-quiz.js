import { createContext, useState } from 'react';

const ContextQuiz = createContext({
    quizIndex: 0,
    //answered: [],
    revealed: [],
    missed: [],
    totalRevealed: 0,
    //totalAnswered: 0,
    //totalCorrect: 0,
    totalMissed: 0
});

export function ProviderContextQuiz(props) {
    const [ quizIndexx, setQuizIndexx ] = useState(0);
    const [ qRevealed, setQRevealed ] = useState([]);
    //const [ correctAns, setCorrectAns ] = useState([])
    const [ missedQs, addMissedQs ] = useState([])

    function incQuizIndexHandler () {
        setQuizIndexx(() => quizIndexx+1);
    }
    
    // function addQsToAnsweredHandler (newQ) {
    //     setQRevealed((prevQs) => {
    //         return prevQs.concat(newQ);
    //     });
    // }

    function addQsToRevealedHandler (newQ) {
        setQRevealed((prevQs) => {
            return prevQs.concat(newQ);
        });
    }

    function addQsToMissedHandler (newQ) {
        addMissedQs((prevQs) => {
            return prevQs.concat(newQ);
        });
        //console.log("missed");
        //console.log(newQ);
    }

    // function removeQuizHandler (myQId) {
    //     setQRevealed((prevQs) => {
    //         return prevQs.filter( qs => qs.id !== myQId);
    //     });
    // }

    function isQsRevealedHandler (myQId) {
        return qRevealed.some( qs => qs.id === myQId );
    }

    
    const context = {
        quizIndex: quizIndexx,
        revealed: qRevealed,
        totalRevealed: qRevealed.length,
        missed: missedQs,
        totalMissed: missedQs.length,
        incQuizIndex: incQuizIndexHandler,
        //addQsToAnswered: addQsToAnsweredHandler,
        addQsToRevealed: addQsToRevealedHandler,
        isQsRevealed: isQsRevealedHandler,
        addQsToMissed: addQsToMissedHandler
    };

    return (
        <ContextQuiz.Provider value={context}>
            {props.children}
        </ContextQuiz.Provider>
    );
}

export default ContextQuiz;