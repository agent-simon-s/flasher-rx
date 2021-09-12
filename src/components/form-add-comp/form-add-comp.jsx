import { useRef } from "react";
import ContentCardComp from '../../layouts/content-card/card-comp';
import './form-add-comp.scss'

function FormAddComp(props){
    const inptTopicRef = useRef();
    // const inptYearRef = useRef();
    // const inptMonthRef = useRef();
    // const inptDayRef = useRef();
    const inptPoserRef = useRef();
    const inptAnswerOneRef = useRef();
    const inptAnswerTwoRef = useRef();
    const inptHintRef = useRef();
    const inptImgSrcRef = useRef();


    function submitHandler(event) {
        event.preventDefault();

        const entTopic = inptTopicRef.current.value;
        // const entYear = inptYearRef.current.value;
        // const entMonth = inptMonthRef.current.value;
        // const entDay = inptDayRef.current.value;
        const entPoser = inptPoserRef.current.value;
        const entAnswerOne = inptAnswerOneRef.current.value;
        const entAnswerTwo = inptAnswerTwoRef.current.value;
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
            // answer: entAnswer,
            choices: [ 
                { 
                    text: entAnswerOne, is: true
                },
                {
                    text: entAnswerTwo, is: false
                }
             ],
            hint: entHint,
            img: [{ src: entImgSrc, alt: "yaas" }]
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
                   <label htmlFor="answer">CORRECT ANSWER</label>
                   <input type="text" require id="answerOne"   ref={inptAnswerOneRef} />
               </div>
               <div className="control">
                   <label htmlFor="answer">DISTRACTOR ANSWER</label>
                   <input type="text" require id="answerTwo"   ref={inptAnswerTwoRef} />
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