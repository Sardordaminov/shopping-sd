import React, { useState } from 'react'
import Header from './component/Header'
import Items from './component/Items'
import Footer from './component/Footer'

function App() {
  const [orders, setOrders] = useState([])
  const [favorite, setFavorite] = useState([])
  let [items, setItems] = useState([
    {
      id: 1,
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      img: 'sneaker.jpg',
      price: '12999',
      inFavorite: false,
      inOrder: false,
    },
    {
      id: 2,
      title: 'Мужские Кроссовки Nike Air Max 270',
      img: 'sneaker1.jpg',
      price: '12999',
      inFavorite: false,
      inOrder: false,
    },
    {
      id: 3,
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      img: 'sneaker2.jpg',
      price: '8499',
      inFavorite: false,
      inOrder: false,
    },
    {
      id: 4,
      title: 'Кроссовки Puma X Aka Boku Future Rider',
      img: 'sneaker3.jpg',
      price: '8999',
      inFavorite: false,
      inOrder: false,
    },
    {
      id: 5,
      title: 'Мужские Кроссовки Under Armour Curry 8',
      img: 'sneaker4.jpg',
      price: '15199',
      inFavorite: false,
      inOrder: false,
    },
    {
      id: 6,
      title: 'Мужские Кроссовки Nike Kyrie 7',
      img: 'sneaker5.jpg',
      price: '11299',
      inFavorite: false,
      inOrder: false,
    },
    {
      id: 7,
      title: 'Мужские Кроссовки Jordan Air Jordan 11',
      img: 'sneaker6.jpg',
      price: '10799',
      inFavorite: false,
      inOrder: false,
    },
    {
      id: 8,
      title: 'Мужские Кроссовки Nike LeBron XVIII',
      img: 'sneaker7.jpg',
      price: '16499',
      inFavorite: false,
      inOrder: false,
    },
    {
      id: 9,
      title: 'Мужские Кроссовки Nike LeBron XVIII Low',
      img: 'sneaker8.jpg',
      price: '13999',
      inFavorite: false,
      inOrder: false,
    },
    {
      id: 10,
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      img: 'sneaker9.jpg',
      price: '8499',
      inFavorite: false,
      inOrder: false,
    },
    {
      id: 11,
      title: 'Кроссовки Puma X Aka Boku Future Rider',
      img: 'sneaker10.jpg',
      price: '8999',
      inFavorite: false,
      inOrder: false,
    },
    {
      id: 12,
      title: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
      img: 'sneaker11.jpg',
      price: '11299',
      inFavorite: false,
      inOrder: false,
    },
  ])
  console.log(items.inFavorite);

  const addOrder = (item) => {
    let isInArray = false;
    orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      setOrders((prevOrders) => [...prevOrders, item])

    } else {
      alert('already in orders')
    }
  };

  const addFavorite = (item) => {
    let isInArray = false;

    favorite.forEach((el) => {
      if (el.id === item.id) { isInArray = true }
    });

    if (!isInArray) {
      setFavorite((prevFavorite) => [...prevFavorite, item])

      setItems((prevItems) =>
        prevItems.map((el) => (el.id === item.id ? { ...el, inFavorite: true } : el))
      );
    } else {
      alert('already in favorites')
    }
  };

  const deleteOrder = (id) => {
    setOrders((prevOrder) => prevOrder.filter((el) => el.id !== id && el.inOrder === false))
  }

  const deleteFavorite = (id) => {
    setFavorite((prevFavorite) => prevFavorite.filter((el) => el.id !== id))
    setItems((prevItems) => prevItems.map((el) => (el.id === id ? { ...el, inFavorite: false } : el)));
  }
  return (
    <div className='wrapper'>
      <Header orders={orders} onDelete={deleteOrder} onDelete1={deleteFavorite} favorite={favorite} />
      <Items items={items} addOrder={addOrder} addFavorite={addFavorite} />
      <Footer />
    </div>
  )
}

export default App