import React from "react";
import { CurrentUserContext } from "./context/CurrentUserContext";

function Cards(prosp){
const currentUser = React.useContext(CurrentUserContext);
const isOwn = prosp.card.owner._id === currentUser._id;
const isLiked = prosp.card.likes.some((i) => i._id === currentUser._id);

function handleClick(){
    prosp.onCardClick(prosp.card)
}

function handleLikeClick(){
  prosp.onCardLike(prosp.card)
}

function handleDeleteClick(){
  prosp.onCardDelete(prosp.card)
}

return(
  <div className="element__template">
  <img className="element__img" 
  alt={prosp.card.name}
  src={prosp.card.link}
  onClick={handleClick} />
  <div className="element__info">
    <button className={isOwn ? "element__trash" : "element__trash-active"} //смнеить имя
    type="button"
    aria-label="Удалить"
    onClick={handleDeleteClick}
    ></button>
    <h2 className="element__name">
    {prosp.card.name}</h2>
    <div className="element__like-div">
    <button className={isLiked ? "element__like_active" : "element__like"}
    type="button"
    aria-label="Лайк"
    onClick={handleLikeClick}></button>
    <p className="element__like-counter">{prosp.card.likes.length}</p>
    </div>
  </div>
</div>
)
}

export default Cards;