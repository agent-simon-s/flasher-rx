import React, { useState, useEffect } from "react"
import MeetListComp from "../components/meet-list-comp/meet-list-comp.jsx"

//  

function AllMeetUpPage() {
    const[ error, setError] = useState(null);
    const[ isLoaded, setIsLoaded ] = useState(false);
    const[ cardList, setCardList ] = useState([]);

    useEffect(() => {
        console.log("use efect test");
        fetch('http://localhost:1337/flashcards').then(responce => { 
            return responce.json();
        }).then(
        (data) => {
            //3:10 spread version
            setIsLoaded(true);
            console.log(data);
            setCardList(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        });
    },[]);


    return (
        <section>
            <h1>All The Questions</h1>
            { error && <p>Could not Load Data at this time</p> }
            { isLoading && <p>Loading your next question...</p> }
            { cardList && <MeetListComp meets={cardList}></MeetListComp> }
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
    );
}

export default AllMeetUpPage;

