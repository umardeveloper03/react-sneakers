import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="p-40">
      <div className="container">
        <div className="d-flex justify-between align-center">
          <Link to='/'>
            <div className="d-flex align-center">
              <img
                width={40}
                height={40}
                className="mr-5"
                src="/img/logo.png"
                alt=""
              />
              <div>
                <h2 className="text-uppercase">REACT SNEAKERS</h2>
                <p className="opacity-5">Магазин лучших кроссовок</p>
              </div>
            </div>
          </Link>
          <ul className="d-flex justify-between">
            <li onClick={props.onClickOpen} className="mr-30 cu-p">
              <img
                className="mr-5"
                width={18}
                height={18}
                src="/img/cart.png"
                alt=""
              />
              <span>1205 руб.</span>
            </li>
            <Link to="favorite">
              <li className="mr-20 cu-p">
                <img src="/img/favorite-icons.svg" alt="" />
              </li>
            </Link>
            <li>
              <img width={18} height={18} src="/img/user.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
