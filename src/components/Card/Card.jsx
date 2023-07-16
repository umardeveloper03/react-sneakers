import React, { useState } from "react";
import styles from "./Card.module.scss";

const Card = ({
  items,
  onAddToCart,
  onFavorite,
  favorited = false,
  added = false,
}) => {
  const [isAdded, setIsAdded] = useState(added);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    onAddToCart(items);
    setIsAdded(!isAdded);
  };
  const onClickFavorite = () => {
    onFavorite(items);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>

          <div className={styles.favorite} onClick={onClickFavorite}>
            <img
              src={isFavorite ? "/img/liked.svg" : "/img/onliked.svg"}
              alt=""
            />
          </div>
          <img width="100%" height={130} src={items.imageUrl} alt="" />
          <h5>{items.title}</h5>
          <div className="d-flex justify-between align-center mt-15">
            <div className="d-flex flex-column ">
              <span>Цена:</span>
              <b>{items.price} руб.</b>
            </div>
            <img
              className={styles.plus}
              onClick={onClickPlus}
              src={isAdded ? "/img/btn-checked-plus.png" : "/img/plus.png"}
              alt=""
            />
          </div>
    </div>
  );
};

export default Card;
