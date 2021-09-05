import './card-comp.scss';

function ContentCardComp (props) {
    return (
         <div className='content-container-card'>
             {props.children}
        </div>
    )
}

export default ContentCardComp;