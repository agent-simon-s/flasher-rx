import React, { useState, useEffect } from "react"
import MeetListComp from "../components/meet-list-comp/meet-list-comp.jsx"

//  

function QuizPage() {
    const [error, setError] = useState(null);
    const[ isLoading, setIsLoading ] = useState(true);
    const[ eventList, setEventList ] = useState(null);

    useEffect(() => {
        console.log("use efect test");
        fetch('http://localhost:1337/flashcards').then(responce => { 
            return responce.json();
        }).then(
        (data) => {
            //2do:  error handling here 
            //3:10 spread version
            setIsLoading(false);
            console.log(data);
            setEventList(data);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        });
    },[]);


    return (
        <section>
            <h1>Drinkups Home</h1>
            { error && <p>Could not Load Data at this time</p> }
            { isLoading && <p>Loading your next question...</p> }
            { eventList && <MeetListComp meets={eventList}></MeetListComp> }
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

