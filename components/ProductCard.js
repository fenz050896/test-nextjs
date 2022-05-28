import Link from 'next/link';
import { useState } from 'react';

import StarRating from '../components/StarRating';
import Price from '../components/Price';

import addItemToCart from '../utils/add-item-to-cart';

export default function ProductCard({
  productId,
  imgSrc,
  itemTitle,
  rating,
  ratingCount,
  price,
  categoryName,
  cartItems,
  handleAddItem,
}) {
  const [qty, setQty] = useState('');

  function handleAddItemToCart() {
    const newCart = addItemToCart({
      cartItems,
      productId,
      itemTitle,
      rating,
      ratingCount,
      price,
      categoryName,
      qty,
    });
    handleAddItem(newCart);
  }

  return (
    <div className="container__item">
      <div className="container__item__image">
        <img src={imgSrc} alt={itemTitle} />
      </div>
      <div className="container__item__title">
        <h1>
          { itemTitle }
        </h1>
      </div>
      <StarRating rating={rating} ratingCount={ratingCount} />
      <div className="container__item__category_name">
        <span className="pill">
          { categoryName }
        </span>
      </div>
      <Price price={price} />
      <div className="container__item__quantity">
        <label className="input-label">Qty</label>
        <input
          type="number"
          className="input-control inline"
          value={qty}
          onChange={(evt) => { setQty(evt.target.value); }}
        />
      </div>
      <div className="container__item__action">
        <button
          className={`btn accent ${qty && qty > 0 ? '' : 'disabled'}`}
          onClick={handleAddItemToCart}
        >
          Add to cart
          <i className="fa fa-shopping-cart m-i-start-half"></i>
        </button>
        <Link href={`/product/${productId}`}>
          <button className="btn">More ...</button>
        </Link>
      </div>
    </div>
  );
}
