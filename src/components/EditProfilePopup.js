import React, { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "./context/CurrentUserContext";

function EditProfilePopup(props){

    const currentUser  = React.useContext(CurrentUserContext);
    const[name , setName] = useState('');
    const[researcher , setResearcher] = useState('');
    useEffect(()=>{
        setName(currentUser.name);
        setResearcher(currentUser.about);
    },[currentUser])

    function handleSubmit(e){
        e.preventDefault();
        props.onUpdateUser({
            name: name,
            about: researcher,
        });
    }

    return (
    <PopupWithForm 
    name={"type__profile"}
    title={'Редактировать профиль'} 
    isOpen={props.isOpen ? 'popup__open': ""}
    onClose={props.onClose}
    buttonText={'Сохранить'}
    onSubmit={handleSubmit}>
    <input
     type="text"
     className="popup__input" 
     id="popup__name" 
     name="profile_name" 
     placeholder="Имя" 
     required
     onChange={(e)=>{
    setName(e.target.value);
    }}
     value={name}/>
    <span className="popup__name-error popup__input-error"></span>
    <input type="text" 
    className="popup__input" 
    id="popup__researcher"
    name="profile_researcher"
    placeholder="Вид деятельности"
    required
    onChange={(e)=>{
    setResearcher(e.target.value);
    }}
    value={researcher}/>
    <span className="popup__researcher-error popup__input-error"></span>
    </PopupWithForm>
    )
}



export default EditProfilePopup;