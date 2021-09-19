import { createContext, useState } from 'react';
import { FETCH_PATH } from "../shared/constants";
//import { Flashcards } from "../constants/dummy-data.js";
import { Flashcards } from "../constants/fallback-data.js";


const ContextQuestionPool = createContext({
    questions: [],
    topics: [],
    questionCount: 0,
    topicCount: 0
});

export function ProviderContextQuestionPool(props) {
    const [error, setError] = useState(null);
    const[ isPoolLoaded, setIsPoolLoaded ] = useState(false);
    const[ questionPool, setQuestionPool ] = useState([]);
    const[ topicPool, setTopicPool ] = useState([]);
    const[ qCount, setQCount ] = useState();
    //const[ isFinished, setIsFinished ] = useState(false);


    function getTopicsAvailableHandler() {
        //do stuff
    }

    function loadFallBackData() {
        if (Flashcards.length >1 ) {
            setIsPoolLoaded(true);
            console.log(Flashcards);
            setQuestionPool(Flashcards);
        }
    }

    function fetchQuestionPoolHandler(){
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
            setQuestionPool(data);
        },
        (error) => {
          setIsPoolLoaded(true);
          setError(error);
          loadFallBackData();
        });
    }


    const context = {
        questions: questionPool,
        //questionCount: questionCount,
        topics: topicPool,
        //topicCount: topicCount,
        getTopics: getTopicsAvailableHandler,
        fetchQuestionPool: fetchQuestionPoolHandler 
    };


    return (
        <ContextQuestionPool.Provider value={context}>
            {props.children}
        </ContextQuestionPool.Provider>
    );
}

export default ContextQuestionPool;