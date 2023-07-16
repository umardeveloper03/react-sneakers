import { useEffect, useState } from "react";
import axios from "axios";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import ContentLoader from "react-content-loader";


function App() {
  const [items, setItems] = useState([],null)
  const [cartItems, setCartItems] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    async function fetchData() {

      const itemsResponse = await axios.get("http://localhost:3000/db.json");
      const cartResponse = await axios.get(
        "https://64900b2b1e6aa71680ca6966.mockapi.io/cart"
      );
      const favoriteResponse = await axios.get(
        "https://64900b2b1e6aa71680ca6966.mockapi.io/favorite"
      );


      setCartItems(cartResponse.data);
      setFavorite(favoriteResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(
        `https://64900b2b1e6aa71680ca6966.mockapi.io/cart/${obj.id}`
      );
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post("https://64900b2b1e6aa71680ca6966.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorite.find((favObj) => favObj.id === obj.id)) {
       await axios.delete(
          `https://64900b2b1e6aa71680ca6966.mockapi.io/favorite/${obj.id}`
        );
        // setFavorite((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          "https://64900b2b1e6aa71680ca6966.mockapi.io/favorite",
          obj
        );
        setFavorite((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в фавориты");
    }
  };
  const onChangeInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onDelete = (id) => {
    axios.delete(`https://64900b2b1e6aa71680ca6966.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="wrapper clear">
        {cartOpened ? (
          <Drawer
            onDelete={onDelete}
            items={cartItems}
            onClose={() => setCartOpened(false)}
          />
        ) : null}
        <Header onClickOpen={() => setCartOpened(true)} />

        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                cartItems={cartItems}
                items={items}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeInput={onChangeInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
              />
            }
          />
          <Route
            path="/favorite"
            element={
              <Favorite items={favorite} onAddToFavorite={onAddToFavorite} />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
