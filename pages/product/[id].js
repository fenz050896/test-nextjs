import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';

import Cart from '../../components/Cart';
import StarRating from '../../components/StarRating';
import Price from '../../components/Price';

import addItemToCart from '../../utils/add-item-to-cart';

export default function ProductById({ product }) {
  const router = useRouter();
  const { id } = router.query;
  const [cartItems, setCartItem] = useState([]);
  const [qty, setQty] = useState('');

  function handleAddItemToCart() {
    const newCart = addItemToCart({
      cartItems,
      productId: product.id,
      itemTitle: product.title,
      rating: product.rating.rate,
      ratingCount: product.rating.count,
      price: product.price,
      categoryName: product.category,
      qty,
    });
    setCartItem(newCart);
  }

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items && items.length > 0) {
      setCartItem(items);
    }
  }, []);

  return (
    <main className="wrapper">
      <Head>
        <title>Company Name - Products { id }</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="filter-menu">
        <button className="btn" onClick={() => router.back()}>Back</button>
        <Cart cartItemLength={cartItems.length}/>
      </div>
      <div className="detail-container">
        <div className="detail-container__image">
          {/* <img src={product.image} alt={product.title} /> */}
          <Image src={product.image} alt={product.title} layout="intrinsic" width={500} height={500} />
        </div>
        <div className="detail-container__content">
          <div className="detail-container__content__title">
            <h1>{product.title}</h1>
          </div>
          <div className="detail-container__content__price">
            <Price price={product.price} />
          </div>
          <div className="detail-container__content__rating">
            <StarRating rating={product.rating.rate} ratingCount={product.rating.count} />
          </div>
          <div className="detail-container__content__category">
            <span className="pill">
              { product.category }
            </span>
          </div>
          <div className="detail-container__content__description">
            <p>{ product.description }</p>
          </div>
            <div className="detail-container__content__action">
              <label className="input-label">Qty</label>
              <input
                type="number"
                className="input-control inline"
                value={qty}
                onChange={(evt) => { setQty(evt.target.value); }}
              />
              <button
                className={`btn accent ${qty && qty > 0 ? '' : 'disabled'}`}
                onClick={handleAddItemToCart}
              >
                Add to cart
                <i className="fa fa-shopping-cart m-i-start-half"></i>
              </button>
            </div>
        </div>
      </div>
    </main>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}/`);
  return { props: { product: data } };
}
