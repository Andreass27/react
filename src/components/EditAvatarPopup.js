import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup(props){
    const refAvatar = React.useRef();
    function handleSubmit(e){
        e.preventDefault();
        props.onUpdateAvatar({
        avatar:refAvatar.current.value
        })
    }

    return(
<PopupWithForm
name={'avatar'}
title={'Вы уверены?'}
isOpen={props.isOpen ? "popup__open" : ""}
onClose={props.onClose}
buttonText={'Да'}
onSubmit={handleSubmit}>
<input
type="url"
className="popup__input"
id="popup__avatar"
name="avatarUrl"
placeholder="Ссылка на аватар"
required
ref={refAvatar}
/>
<span className="popup__input-error popup__avatar-error"></span>
</PopupWithForm>
);
}

export default EditAvatarPopup;
