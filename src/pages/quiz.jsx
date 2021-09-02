import React, { useState, useEffect } from "react"
import CardStackComp from "../components/card-stack-comp/card-stack-comp"
import { FETCH_PATH } from "../shared/constants" 

//  on load copy all questions to new array
//  - will add topic filter later
//  print new array
//  - local storage
//  - context first card

function QuizPage() {
    const [error, setError] = useState(null);
    const[ isLoaded, setIsLoaded ] = useState(false);
    const[ questionList, setQuestionList ] = useState([]);

    useEffect(() => {
        console.log("use efect test");
        fetch('http://localhost:1337/flashcards').then(responce => { 
            return responce.json();
        }).then(
        (data) => {
            //2do:  error handling here 
            //3:10 spread version
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


    return (
        <section>
            { error && <p>Could not Load Data at this time</p> }
            { !isLoaded && <p>Loading your next question...</p> }
            { questionList && <CardStackComp meets={questionList}></CardStackComp> }
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
       )
}

export default QuizPage;

