import React from "react";
import Card from "../components/Card/Card";

const Home = ({
  cartItems,
  items,
  searchValue,
  setSearchValue,
  onChangeInput,
  onAddToFavorite,
  onAddToCart,
}) => {

  return (
    <div className="content">
      <div className="container">
        <div className="block_content pt-40">
          <div className=" d-flex justify-between align-center mb-40">
            <h1>Все кроссовки</h1>
            <div className="search_block d-flex justify-between align-center">
              <img width={15} height={15} src="/img/search.png" alt="" />
              <input
                onChange={onChangeInput}
                value={searchValue}
                type="text"
                placeholder="Поиск..."
              />
              {searchValue && (
                <img
                  onClick={() => setSearchValue("")}
                  className="clear cu-p"
                  src="/img/btn-remove.svg"
                  alt=""
                />
              )}
            </div>
          </div>
          <div className="d-flex">
            <div className="container">
              <div className="d-flex flex-wrap">
                {
                items
                  .filter((item) =>
                    item.title.toLowerCase().includes(searchValue.toLowerCase())
                  )
                  .map((item) => (
                    <Card
                      key={item.id}
                      onFavorite={onAddToFavorite}
                      onAddToCart={onAddToCart}
                      items={item}
                      added={cartItems.some(
                        (obj) => Number(obj.id) === Number(item.id)
                      )}

                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
