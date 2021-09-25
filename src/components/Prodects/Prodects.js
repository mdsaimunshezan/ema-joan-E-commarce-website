import React from 'react'
import "./Prodects.css"
import Rating from "react-rating"

const Prodects = (props) => {
    const { name, price, img, stock, star } = props.prodect;
    return (
        <div >
            <div className="prodect">
                <div className="prodect__img">
                    <img src={img} alt="image" />
                </div>
                <div className="prodect__content">
                    <h2 className="prodect__name">{name}</h2>
                    <h2 className="prodect__price">{price}</h2>
                    <h3>{stock}</h3>
                    <Rating
                     emptySymbol="far fa-star"
                     fullSymbol="fas fa-star"
                     readonly
                     initialRating={star}
                    />
                    <br/>
                    
                    <button className="prodect__btn" onClick= {()=> props.handlePursase(props.prodect)}>Pursase</button>
                </div>
            </div>

        </div>
    )
}

export default Prodects
