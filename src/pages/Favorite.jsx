import React from "react";
import Card from "../components/Card/Card";
import './Favorite.scss'
import 'macro-css'

const Favorite = ({ items, onAddToFavorite }) => {
  return (
    <div className="content">
      <div className="container">
        <div className="block_content pt-40">
          <div className=" d-flex justify-between align-center mb-40">
            <h1>Мои закладки</h1>
          </div>
          <div className="d-flex">
            <div className="container">
              <div className="d-flex flex-wrap">
                {items.length > 0 ? (
                  items.map((el) => (
                    <Card
                      key={el.id}
                      items={el}
                      favorited={true}
                      onFavorite={onAddToFavorite}
                    />
                  ))
                ) : (
                  <div className="d-flex justify-center">
                    <div className="favorite">
                      <img src="/img/favorite.png" alt="" />

                      <button className="greenButton">
                        <img src="/img/left.png" alt="" /> Вернуться назад
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
