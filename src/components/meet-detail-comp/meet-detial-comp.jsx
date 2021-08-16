import ContentCardComp from '../content-card/card-comp.jsx';
import './meet-detial-comp.css';


function MeetDetailComp(props) {
    return (
        <li key={props.id}>
            <ContentCardComp>
            <h3 className='detail-title'>{props.date.month}/{props.date.day} -- {props.title}</h3> 
            <div className='detail'>
                <div className='detail-thumb'>
                    <img src={props.img} alt={props.title} />
                </div>
                <div className='detail-info'> 
                    <p>{props.desc}</p>
                    {props.addy}
                </div>
                <div className='detail-action'>
                    <button>
                        [+]
                    </button>
                </div>
            </div>
            </ContentCardComp>
        </li>
    )
}

export default MeetDetailComp;