import { useRef } from "react";
import ContentCardComp from '../content-card/card-comp.jsx';
import './form-add-comp.css'

function FormAddComp(props){
    const inptTopicRef = useRef();
    // const inptYearRef = useRef();
    // const inptMonthRef = useRef();
    // const inptDayRef = useRef();
    const inptPoserRef = useRef();
    const inptAnswerRef = useRef();
    const inptHintRef = useRef();
    const inptImgSrcRef = useRef();


    function submitHandler(event) {
        event.preventDefault();

        const entTopic = inptTopicRef.current.value;
        // const entYear = inptYearRef.current.value;
        // const entMonth = inptMonthRef.current.value;
        // const entDay = inptDayRef.current.value;
        const entPoser = inptPoserRef.current.value;
        const entAnswer = inptAnswerRef.current.value;
        const entHint = inptHintRef.current.value;
        const entImgSrc = inptImgSrcRef.current.value;

        const Data = {
            topic: entTopic,
            // date: {
            //     year: entYear,
            //     month: entMonth,
            //     day: entDay,
            // },
            poser: entPoser,
            answer: entAnswer,
            hint: entHint,
            img: entImgSrc
        };

        console.log(Data);
        props.onAddNewMeet(Data);
    }


    return (
        <ContentCardComp>
           <form action=""  className="form" onSubmit={submitHandler}>
               <div className="control">
                   <label htmlFor="topic" >TOPIC</label>
                   <input type="text" require id="topic" ref={inptTopicRef} />
               </div>
               <div className="control">
                   <label htmlFor="poser">POSER</label>
                   <input type="text" require id="poser"   ref={inptPoserRef} />
               </div>
               <div className="control">
                   <label htmlFor="answer">ANSWER</label>
                   <input type="text" require id="answer"   ref={inptAnswerRef} />
               </div>
               <div className="control">
                   <label htmlFor="hint" >HINT</label>
                   <textarea name="hint" require id="hint" cols="10" rows="5" ref={inptHintRef}></textarea>
               </div>
               <div className="control">
                   <label htmlFor="imgsrc">IMG LINK</label>
                   <input type="text" require id="imgsrc"   ref={inptImgSrcRef} />
               </div>
               <div className="actions">
                   <button>+ADD Drink-UP</button>
               </div>
           </form>
       </ContentCardComp>
    )
}

export default FormAddComp;