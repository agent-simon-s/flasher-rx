import React from "react"
import PropTypes from 'prop-types';
import './modal-comp.scss';

function ModalMask(props) {
  const {
    id,
    className = '',
    title,
    onCancel
  } = props;

    // function openModal () {
    //     console.log(props.title);
    // }
    // function closeModal () {
    //     console.log(props.title);
    // }  
    
    return (
        <div className='modal-mask' onClick={onCancel}></div>
    );
}

ModalMask.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  onCancel: PropTypes.func,
};

export default ModalMask; 