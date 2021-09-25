import React, { useEffect, useState } from 'react'
import { addData } from '../../utilites/fakedb';
import Cart from '../Cart/Cart';
import Prodects from '../Prodects/Prodects';
import "./Shop.css"

const Shop = () => {
    const [prodects, setProdects] = useState([]);
    const [cart, setCart] = useState([]);
    const [searchProdect,setSearchProdect] = useState([]);


    useEffect(() => {
        const lodeData = async () => {
            const res = await fetch("./dataApi.json");
            const data = await res.json();
            setProdects(data);
            setSearchProdect(data)
        }
        lodeData();
    }, [])


    const handlePursase = (prodect) => {
        const newCart = [...cart, prodect];
        setCart(newCart)
        addData(prodect.key)
    }

    const searchInput = (e)=> {
        const searchText = e.target.value;
        const filterItem = prodects.filter(prodect => prodect.name.toUpperCase().includes(searchText.toUpperCase()));
        setSearchProdect(filterItem)
        
    }

    return (
        <div className="container">
            <div className="search">
                <input type="search" placeholder="Search your item" onChange={searchInput}  className="search__box"/>
            </div>
            <h1 style={{ textAlign: "center", color: "orangered" }}>This is Random Shop</h1>
            <div className="shop">
                <div className="shop__content">
                    {
                        searchProdect.map(prodect => <Prodects
                            key={prodect.key}
                            prodect={prodect}
                            handlePursase={handlePursase}
                        />
                        )
                    }
                </div>
                <div className="shop__total">
                    <Cart cart={cart} />
                </div>
            </div>
        </div>
    )
}

export default Shop
