import React, { useState } from 'react'

const Items = (props) => {
    const [query, setQuery] = useState("");

    const filteredProducts = props.items.filter((product) => {
        return product.title.toLowerCase().includes(query.toLowerCase()) ||
            product.price.toLowerCase().includes(query.toLowerCase());
    });

    return (
        <main>
            <div className='item-title'>
                <h1>Все кроссовки</h1>
                <div className='search-bar'>
                    <i className="fa-regular fa-magnifying-glass"></i>
                    <input
                        placeholder='Поиск...'
                        type='search'
                        className='search'
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
            </div>
            <div className='carts'>
                {filteredProducts?.map((el) => (
                    <div className={`cart ${el.inFavorite && 'infavorite'} ${el.inOrder && 'inorder'}`} key={el.id}>
                        <div onClick={() => { props.addFavorite(el) }} className="favourite" ><i className={`${el.inFavorite ? 'fa-solid fa-heart' : 'fa-light fa-heart'}`}></i></div>
                        <img src={'./img/' + el.img} alt='cart-img' />
                        <h2>{el.title}</h2>
                        <label className='item-price-title'>ЦЕНА:</label>
                        <b>{el.price}₽</b>
                        <button onClick={() => { props.addOrder(el) }} className='plus'>
                            {(el.inOrder ? <i className="fa-solid fa-check"></i> : <i className='fa-solid fa-plus'></i>)}
                        </button>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Items