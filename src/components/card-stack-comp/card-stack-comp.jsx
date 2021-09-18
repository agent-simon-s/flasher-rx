//import MeetDetailComp from "../meet-detail-comp/meet-detial-comp.jsx";
import { useState, useEffect } from "react";
import QuestionDetailComp from "../question-detail-comp/question-detial-comp.jsx";
//import ContextQuiz from '../../store/context-quiz';
import './card-stack-comp.scss';


function CardStackComp (props) {
    //const count = props.meets.length;
    const[ qCount, setQCount ] = useState();

    useEffect(() => {
        setQCount(props.meets.length)
        console.log(`Q-Count: ${qCount}`);
    },[props.meets, qCount]);


    return (
         <div>

            <ul>
                {props.meets.map((meet, index) => {
                    return(
                        <QuestionDetailComp 
                            key={meet.id} 
                            id={meet.id} 
                            ndx={index}
                            count={qCount}
                            // date={meet.date} 
                            topic={meet.topic}
                            poser={meet.poser}
                            choices={meet.choices}
                            hint={meet.hint}
                            links={meet.links}
                            img={meet.img}
                            asked={index === 0 ? true : false } />
                    )
                })
             }
            </ul>

        </div>
    )
}

export default CardStackComp ;

// notes:
// pass whole mett objects & deconstruct in detail 