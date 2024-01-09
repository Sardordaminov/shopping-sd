import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { LuUserCircle, LuHeart, LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Navbar = (props) => {
  let [cartopen, setCartOpen] = useState(false);
  let [favorite1, setFavorite1] = useState(false);
  let [nav, setNav] = useState(false);

  const showOrders = (props) => {

    return (
      <div className="order-cart-item">
        {props.orders.map((el) => (
          <div className="Item" key={el.id}>
            <div className="imgBx">
              <img src={"./img/" + el.img} alt="hello" />
            </div>
            <div className="ItemBx">
              <h1>{el.title}</h1>
              <p>{el.price}₽</p>
            </div>
            <button
              onClick={() => {
                props.onDelete(el.id);
              }}
              className="close-box"
            >
              <FaTimes className="close" />
            </button>
          </div>
        ))}
      </div>
    );
  };

  const ordersPrice = (props) => {
    let allprice = 0;
    props.orders.forEach((el) => {
      allprice += Number.parseFloat(el.price);
    });

    let fee = Math.floor((allprice / 100) * 5);

    return (
      <div className="all-price">
        <p className="allprice">Итого: ____________ {allprice}руб.</p>
        <p className="orders-lenght">Налог 5%: ____________ {fee}руб.</p>
      </div>
    )
  }
  const showFavorites = (props) => {
    return (
      <div className="favorite-cart-item">
        {props.favorite.map((el) => (
          <div className="Item" key={el.id}>
            <div className="imgBx">
              <img src={"./img/" + el.img} alt="hello" />
            </div>
            <div className="ItemBx">
              <h1>{el.title}</h1>
              <p>{el.price}₽</p>
            </div>
            <button
              onClick={() => {
                props.onDelete1(el.id);
              }}
              className="close-box"
            >
              <FaTimes className="close" />
            </button>
          </div>
        ))}
      </div>
    );
  };
  const showNothing = (name) => {
    return (
      <div className="nothing">
        <h2>{name} пустая &#128547;</h2>
      </div>
    );
  };

  return (
    <header className={`header ${cartopen ? "active" : ""} ${favorite1 ? "active1" : ""}`}>
      <div className="logo">
        <img src={"./img/logo.jpg"} alt="" />
        <div>
          <h2>REACT SNEAKERS</h2>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>



      <ul className={`nav ${nav && "active"}`}>
        <button
          className="close-box btn"
          id="nav_button"
          onClick={() => setNav((nav) => !nav)}
        >
          <FaTimes className="close" />
        </button>
        <li className="li">
          <LuShoppingCart onClick={() => setCartOpen((cartopen) => !cartopen)} className="open btn" />
          {props.orders.length > 0 && <div className="orders-length"></div>}
          <p>1205 рубл.</p>
        </li>
        <Link to="/favorites">
          <li>
            <LuHeart onClick={() => setFavorite1((favorite1 = !favorite1))} className="btn" />
            {props?.favorite?.length > 0 && <div className="favorite-length"></div>}
          </li>
        </Link>
        <li>
          <LuUserCircle className="btn" />
        </li>
      </ul>
      <i className="fa-solid fa-bars" onClick={() => setNav((nav) => !nav)}></i>



      {/* Order and Favorite */}

      <div className="orders">
        <div className="orders-title">
          <h2>Корзина</h2>
          <button className="close-box btn" onClick={() => setCartOpen((cartopen) => !cartopen)}>
            <FaTimes className="close" />
          </button>
        </div>
        <div className="order-cart">
          {props?.orders?.length > 0
            ? showOrders(props)
            : showNothing("Корзина")}
        </div>
        <div className="orders-bottom">
          {props?.orders?.length > 0 && ordersPrice(props)}
          {props?.orders?.length > 0 && (
            <button className="submit-order">
              Оформить заказ <FaArrowRight style={{marginLeft: "20px", fontSize: "20"}}/>
            </button>
          )}
        </div>
      </div>

      <div className="favorite">
        <div className="favorite-title">
          <h2>Мои закладки</h2>
          <button
            className="close-box btn"
            onClick={() => setFavorite1((favorite1) => !favorite1)}
          >
            <FaTimes className="close" />
          </button>
        </div>
        <div className="favorite-cart">
          {props?.favorite?.length > 0
            ? showFavorites(props)
            : showNothing("Закладок")}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
