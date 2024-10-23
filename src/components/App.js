import React, { useEffect, useState } from "react";
import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import { api } from "../utilits/Api";
import {CurrentUserContext} from '../components/context/CurrentUserContext'
import { CardContext } from "./context/CardsContext";
import AddPlacePopup from "./AddPlacePopup"
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";

function App(){
const[isEditProfilePopupOpen,setisEditProfilePopupOpen]= useState(false)
const[isAddPlacePopupOpen,setisAddPlacePopupOpen]=useState(false)
const[isEditAvatarPopupOpen,setisEditAvatarPopupOpen]=useState(false)
const[selectedCard,setselectedCard]=useState(null) 
const[currentUser, setCurrentUser]=useState({})
const[cards,setCards] =useState([])

useEffect(()=>{
    api.getCards()
    .then((res)=>{
    setCards(res)   
    })
    .catch((err)=>{
        console.log(err)
    })
},[])

useEffect(()=>{
    api.getUserData()
    .then((res)=>{
    setCurrentUser(res)   
    })
    .catch((err)=>{
        console.log(err)
    })
},[])

const cat =[]

const log = Math.floor(Math.random() * cat.length)
console.log(cat[log]);


function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
      if(!isLiked){
        api.addLike(card._id)
        .then((res) => {
        setCards((state) => state.map((item) => (item._id === card._id ? res : item))
          );
        })} 
      else{
        api.deleteLike(card._id)
        .then((res) => {setCards((state) => state.map((item) => (item._id === card._id ? res : item))
            );
          })}
  }

function handleCardDelete(card){
api.deleteCard(card._id)
.then(()=>{
setCards((state)=> state.filter((item)=> item._id !== card._id)) 
})
}

function handleEditProfileClick(){
setisEditProfilePopupOpen(true);
}

function handleAddPlaceClick(){
setisAddPlacePopupOpen(true);
}

function handleAvatarClick(){
setisEditAvatarPopupOpen(true);
}

function handleCardclick(card){
setselectedCard(card);
}


function closeAllPopup(){
setisEditProfilePopupOpen(false)
setisAddPlacePopupOpen(false)
setisEditAvatarPopupOpen(false)
setselectedCard();
}

function handleUpdateUser(data){
    console.log(data)
    api.patchUserData(data.name, data.about)
    .then((res)=>{
    setCurrentUser(res);
    setisEditProfilePopupOpen(false)
    })
}

function handleAddPlaceSubmit(data){
    api.postCard(data.name,data.link)
    .then((res)=>{
        setCards([res, ...cards])
        setisAddPlacePopupOpen(false)
    })
    .catch((err)=>{
        console.log(err);
    })
}

function handleUpdateAvatar(data){
    api.patchAvatar(data.avatar)
    .then((res)=>{
    setCurrentUser(res)
    setisEditAvatarPopupOpen(false)
    })
    .catch((err)=>{
        console.log(err)
    })
}

return (
<div className="page">
<CurrentUserContext.Provider value={currentUser}>
<Header />
<CardContext.Provider value={cards}>
<Main

onEditProfile={handleEditProfileClick}
onAddPlace={handleAddPlaceClick} 
onEditAvatar={handleAvatarClick}
onCardClick={handleCardclick}
onCardLike={handleCardLike}
onCardDelete={handleCardDelete}
cards={cards}
/>

<EditProfilePopup
isOpen={isEditProfilePopupOpen}
onClose={closeAllPopup}
onUpdateUser={handleUpdateUser}
/>

<AddPlacePopup 
isOpen={isAddPlacePopupOpen}
onClose={closeAllPopup}
AddPlace={handleAddPlaceSubmit}
/>

<EditAvatarPopup
isOpen={isEditAvatarPopupOpen}
onClose={closeAllPopup}
onUpdateAvatar={handleUpdateAvatar}
/> 

<ImagePopup
onClose={closeAllPopup}
card={selectedCard}



/>
</CardContext.Provider>
<Footer />
</CurrentUserContext.Provider>
</div>
)
}

export default App;

