import ContentCardComp from '../content-card/card-comp.jsx';
import { useState} from 'react';
import './meet-detial-comp.css';


function MeetDetailComp(props) {
    const[ isActive, setIsActive] = useState(false);
    //const[ isAsked, setIsAsked] = useState(false);
    //const[ isCorrect, setIsCorrect] = useState(null);

    // function flipCard(){

    // }


    return (
        <>
        { isAsked && (
        <li key={props.id}>
            
            <ContentCardComp className={ isActive ? "active" : null } >
                <h3 className='detail-title'>{/*{props.date.month}/{props.date.day}*/}{props.poser}</h3> 
                <div className="frontSide">
                    <div className='detail-thumb'>
                        <img src={props.img[0].src} alt={props.img[0].alt} />
                    </div>
                    <div className='detail-info'>
                        {
                            props.choices.map((item,index) => {
                                return(
                                    <p key={index}>{item.text}</p>
                                )
                            })
                        } 
                    </div>
                    <button >
                        hi
                    </button>
                </div>
                <div className="backSide">
                    <div className='detail'>
                        {/*<div className='detail-info'> 
                            <p>{props.choices[0].text}</p>
                            <p>{props.choices[1].text}</p>
                            <p>{props.choices[2].text}</p>
                            <p>{props.choices[3].text}</p>
                        </div>*/}
                        <div className='detail-info'> 
                            <p>{props.hint}</p>
                        </div>
                        <div className='detail-action'>
                            <button>
                                [+]Topics: {props.topic}
                            </button>
                        </div>
                    </div>
                </div>
            </ContentCardComp>
        </li> ) }
        </>
    )
}

export default MeetDetailComp;

