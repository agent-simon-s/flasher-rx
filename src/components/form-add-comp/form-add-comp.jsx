import { useRef } from "react";
import ContentCardComp from '../content-card/card-comp.jsx';
import './form-add-comp.css'

function FormAddComp(props){
    const inptTitleRef = useRef();
    const inptYearRef = useRef();
    const inptMonthRef = useRef();
    const inptDayRef = useRef();
    const inptAddyRef = useRef();
    const inptDescRef = useRef();
    const inptImgSrcRef = useRef();


    function submitHandler(event) {
        event.preventDefault();

        const entTitle = inptTitleRef.current.value;
        const entYear = inptYearRef.current.value;
        const entMonth = inptMonthRef.current.value;
        const entDay = inptDayRef.current.value;
        const entAddy = inptAddyRef.current.value;
        const entDesc = inptDescRef.current.value;
        const entImgSrc = inptImgSrcRef.current.value;

        const Data = {
            title: entTitle,
            date: {
                year: entYear,
                month: entMonth,
                day: entDay,
            },
            address: entAddy,
            description: entDesc,
            img: entImgSrc
        };

        console.log(Data);
        props.onAddNewMeet(Data);
    }


    return (
        <ContentCardComp>
           <form action=""  className="form" onSubmit={submitHandler}>
               <div className="control">
                   <label htmlFor="title" >TITLE</label>
                   <input type="text" require id="title" ref={inptTitleRef} />
               </div>
               <div className="control">
                   <label htmlFor="year">YEAR</label>
                   <input type="text" require id="year" maxLength="4" ref={inptYearRef} />
               </div>
               <div className="control">
                   <label htmlFor="month">MONTH</label>
                   <input type="text" require id="month" maxLength="2" ref={inptMonthRef} />
               </div>
               <div className="control">
                   <label htmlFor="day">DAY</label>
                   <input type="text" require id="day" maxLength="2" ref={inptDayRef} />
               </div>
               <div className="control">
                   <label htmlFor="address">ADDRESS</label>
                   <input type="text" require id="address"   ref={inptAddyRef} />
               </div>
               <div className="control">
                   <label htmlFor="description" >DESCRIPTION</label>
                   <textarea name="description" require id="description" cols="10" rows="5" ref={inptDescRef}></textarea>
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