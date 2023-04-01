import React from "react";
import "./Modal.css"


const Modal = ({open,onClose}) =>{
    if(!open) return null;
    return(
        <div onClick={onClose} id="overlay">
                <div onClick={(e) => {e.stopPropagation()}} id="modalContrainer">
                    <button onClick={onClose} id="close-modal-btn">X</button>
                    <h1 id="regex_head"> Regular Expression </h1>
                    <div className="regex_content">
                        <h2>Helloooooo</h2>
                    </div>
                </div>
        </div>
    )
}

export default Modal;