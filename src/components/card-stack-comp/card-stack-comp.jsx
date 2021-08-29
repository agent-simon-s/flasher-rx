import MeetDetailComp from "../meet-detail-comp/meet-detial-comp.jsx";
import '../meet-detail-comp/meet-detial-comp.css';

function MeetListComp (props) {
    return (
         <div>
            <ul>
             {props.meets.map((meet) => {
                    return(
                        <MeetDetailComp 
                            key={meet.id} 
                            id={meet.id} 
                            // date={meet.date} 
                            topic={meet.topic}
                            poser={meet.poser}
                            choices={meet.choices}
                            hint={meet.hint}
                            img={meet.img} />
                    )
                })
             }
            </ul>
        </div>
    )
}

export default MeetListComp ;

// notes:
// pass whole mett objects & deconstruct in detail
// own css
// date stuff 