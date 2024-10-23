import React from "react";

function PopupWithForm(props){
    return(
        <div className={`popup popup_${props.name} ${props.isOpen}`}>
        <div className="popup__container">
          <button
          className="popup__close"
          type="button"
          aria-label="Закрытие формы"
          onClick={props.onClose}>
          </button>
          <form
          className="popup__form"
          method="post"
          name={props.name}>
          <h2 className="popup__name">
          {props.title}</h2>
          {props.children}
            <button className="popup__button"
            onClick={props.onSubmit}
            aria-label="да"> 
            {props.buttonText}
            </button>
          </form>
        </div>
      </div>    
    )
}
export default PopupWithForm;