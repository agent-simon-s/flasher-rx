import ContentCardComp from '../content-card/card-comp.jsx';
import './meet-detial-comp.css';


function MeetDetailComp(props) {
    return (
        <li key={props.id}>
            <ContentCardComp>
            <h3 className='detail-title'>{/*{props.date.month}/{props.date.day}*/}{props.poser}</h3> 
            <div className='detail'>
                <div className='detail-thumb'>
                    <img src={props.img} alt={props.topic} />
                </div>
                <div className='detail-info'> 
                    <p>{props.choices.answer[0]}</p>
                    <p>{props.choices.answer[1]}</p>
                    <p>{props.choices.answer[2]}</p>
                    <p>{props.choices.answer[3]}</p>
                </div>
                <div className='detail-info'> 
                    <p>{props.hint}</p>
                </div>
                <div className='detail-action'>
                    <button>
                        [+]Topic: {props.topic}
                    </button>
                </div>
            </div>
            </ContentCardComp>
        </li>
    )
}

export default MeetDetailComp;