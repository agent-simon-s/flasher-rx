import './card-comp.css';

function ContentCardComp (props) {
    return (
         <div className='content-container-card'>
             {props.children}
        </div>
    )
}

export default ContentCardComp;