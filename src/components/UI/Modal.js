import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'


const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.closeModelWhenClickOutside} />
}

const ModalOverlay = (props) => {
    return (<div className={classes.modal} >
        <div className={classes.content}>{props.children}</div>
    </div>
    )
}

const portalElement = document.getElementById('overlays');

function Modal(props) {
    return (
        <div>
            {ReactDOM.createPortal(<Backdrop closeModelWhenClickOutside={props.closeModel} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}

        </div>
    )
}

export default Modal
