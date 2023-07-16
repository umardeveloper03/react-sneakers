import React from "react";
import "./Drawer.scss";

const Drawer = ({ onClose, items, onDelete }) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className=" d-flex justify-between  mb-30">
          Корзина
          <img
            onClick={onClose}
            className="cu-p"
            src="/img/btn-remove.svg"
            alt=""
          />
        </h2>

        {items.length > 0 ? (
          <div className="items">
            {items.map((el) => (
              <div key={el.id} className="cartItem d-flex align-center mb-20">
                <div
                  style={{ backgroundImage: `url(${el.imageUrl})` }}
                  className="cartItemImg"
                ></div>
                <div className="mr-20 flex">
                  <p className="mb-5">{el.title}</p>
                  <b>{el.price} руб.</b>
                </div>
                <img
                  className="removeBtn"
                  onClick={() => onDelete(el.id)}
                  src="/img/btn-remove.svg"
                  alt=""
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="pusto1 d-flex justify-center">
            <div className="pusto">
              <img src="/img/pusto.png" alt="" />
              <h2>Корзина пустая</h2>
              <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>

              <button onClick={onClose} className="greenButton">
                <img src="/img/left.png" alt="" /> Вернуться назад
              </button>
            </div>
          </div>
        )}

        <div className="cart-total-block">
          <ul>
            <li className="d-flex">
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li className="d-flex">
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
