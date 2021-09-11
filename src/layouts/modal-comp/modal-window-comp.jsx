import React, { useState, useEffect } from "react"
import './modal.css';



function ModalWindow(props) {
    const [ modalVis, setModalVis ] = useState(false);

    // function openModalWindow () {
    //     setModalVis(true);
    // }
    // function closeModalWindow () {
    //     setModalVis(false);
    // }
    function cancelHandler () {
        props.onCancel();
        console.log("handel cancel");
    }
    function confirmHandler () {
        props.onConfirm();
        console.log("handel confirm");
    }
    
    return (
        <div className={ modalVis ? 'modal-window open' : 'modal-window closed'} >
            <div className="modal-content" >
                <button className='btn' onClick={props.onCancel}>(X)</button>
                <h3>{props.title}</h3>
                <p className='desc'>Sure? Whatever</p>
                <div className='actions'>
                    <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button>
                    <button className='btn' onClick={confirmHandler}>Confirm</button>
                </div>
                <p className='desc'>{props.desc}</p>
            </div>
        </div>
    );
}

export default ModalWindow; 