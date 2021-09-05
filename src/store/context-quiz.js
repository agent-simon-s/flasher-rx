import { createContext, useState } from 'react';

const ContextQuiz = createContext({
    //answered: [],
    revealed: [],
    quizIndex: 0,
    //totalRevealed: 0,
    //totalAnswered: 0,
    //totalCorrect: 0,
    //totalWrong: 0
});

export function ProviderContextQuiz(props) {
    const [ qRevealed, setQRevealed ] = useState([]);
    const [ quizIndexx, setQuizIndexx ] = useState(0);
    //const [ correctAns, setCorrectAns ] = useState([])
    //const [ wrongAns, setWrongAns ] = useState([])
    
    function addQuizHandler (newQ) {
        setQRevealed((prevQs) => {
            return prevQs.concat(newQ);
        });
    }

    // function removeQuizHandler (myQId) {
    //     setQRevealed((prevQs) => {
    //         return prevQs.filter( qs => qs.id !== myQId);
    //     });
    // }

    function isQsRevealedHandler (myQId) {
        return qRevealed.some( qs => qs.id === myQId );
    }

    function incQuizIndexHandler () {
        setQuizIndexx(() => quizIndexx+1);
    }

    const context = {
        revealed: qRevealed,
        //totalRevealed: quizIndex,
        totalRevealed: qRevealed.length,
        addQuiz: addQuizHandler,
        isQsRevealed: isQsRevealedHandler,
        incQuizIndex: incQuizIndexHandler,
        quizIndex: quizIndexx

    };

    return (
        <ContextQuiz.Provider value={context}>
            {props.children}
        </ContextQuiz.Provider>
    );
}

export default ContextQuiz;