import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";    

function AddPlacePopup(props){
    const[name,setName] = useState();
    const[link,setLink] = useState();
    function hahdleChangeName(e){
    setName(e.target.value);
}

function hahdleChangeLink(e){
    setLink(e.target.value);  
}

function hadnelSubmit(e){
    e.preventDefault()
    props.AddPlace({
        name: name,
        link:link
    })
}

return(
<PopupWithForm
name={"popup_type_card-add"}
title={"Новое место"}
isOpen={props.isOpen ? "popup__open" : ""}
buttonText={"Сохранить"}
onClose={props.onClose}
onSubmit={hadnelSubmit}>

<input
type="text"
className="popup__input"
id="popup__place"
placeholder="название"
name="addFormName"
required
onChange={hahdleChangeName}
value={name}
/>

<span className="popup__place-error popup__input-error"></span>
<input
type="url"
className="popup__input"
name="addFormUrl"
placeholder="ссылка на картинку"
required
onChange={hahdleChangeLink}
value={link}>
</input>
<span className="popup__link-error popup__input-error"></span>
</PopupWithForm>
)
}

export default AddPlacePopup;

