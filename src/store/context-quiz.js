import { createContext, useState } from 'react';

const ContextQuiz = createContext({
    answered: [],
    revealed: [],
    totalRevealed: 0,
    totalAnswered: 0,
    totalCorrect: 0,
    totalWrong: 0
});

export function ProviderContextQuiz(props) {
    const [ qRevealed, setQRevealed ] = useState([])
    //const [ correctAns, setCorrectAns ] = useState([])
    //const [ wrongAns, setWrongAns ] = useState([])

    
    function addQuizHandler (newQ) {
        setQRevealed((prevQs) => {
            return prevQs.concat(newQ);
        });
    }

    function removeQuizHandler (myQId) {
        setQRevealed((prevQs) => {
            return prevQs.filter( qs => qs.id !== myQId);
        });
    }

    function isQsRevealedHandler (myQId) {
        return qRevealed.some( qs => qs.id === myQId );
    }

    const context = {
        revealed: qRevealed,
        totalRevealed: qRevealed.length,
        addQuiz: addQuizHandler,
        isQsAsked: isQsRevealedHandler
    };


    return (
        <ContextQuiz.Provider value={context}>
            {props.children}
        </ContextQuiz.Provider>
    );
}

export default ContextQuiz;