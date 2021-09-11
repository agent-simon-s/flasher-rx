import React from "react"
import './modal-comp.scss';

function ModalMask(props) {

    // function openModal () {
    //     console.log(props.title);
    // }
    // function closeModal () {
    //     console.log(props.title);
    // }  
    
    return (
        <div className='modal-mask' onClick={props.onCancel}></div>
    );
}

export default ModalMask; 