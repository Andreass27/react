import React, {useEffect,useState} from 'react';
import Cards from './Cards.js';
import {CurrentUserContext} from '../components/context/CurrentUserContext.js'
import { CardContext } from './context/CardsContext.js';

function Main(props){
  const userContext = React.useContext(CurrentUserContext);
  const CardsContext = React.useContext(CardContext);

return(
  <>
  <section className="profile">
<div className="profile__avatar">
  <div className="profile__overlay">
     <img className="profile__image" 
     src={userContext.avatar}
     alt="Аватар профиля"
     onClick={props.onEditAvatar} ></img>
  </div>
</div>
<div className="profile__info">
  <div className="profile__text">
    <h1 className="profile__name">{userContext.name} 
    </h1>
    <p className="profile__researcher">{userContext.about}
    </p>
  </div>
  <button className="profile__edit-button"
  type="button"
  id="Editbutton"
  onClick={props.onEditProfile}></button>
</div>
 <button className="profile__add-button"
   type="button"
   id="addButton"
onClick={props.onAddPlace}>
  </button>
</section>
<section className="elements">
  {CardsContext.map((item) => (
<Cards
onCardClick={props.onCardClick}
key={item._id}
card={item}
onCardLike={props.onCardLike}
onCardDelete={props.onCardDelete}
/>
))}
</section>
</>
)
}

export default Main;

