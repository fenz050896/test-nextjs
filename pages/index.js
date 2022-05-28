import axios from 'axios';
import { useState, useEffect } from 'react';
import Head from 'next/head';

import FilterSidebar from '../components/FilterSidebar';
import ProductCard from '../components/ProductCard';
import FilterMenu from '../components/FilterMenu';

export default function Product({ data }) {
  const { categories, products } = data;
  const [showSidebar, toggleSidebar] = useState(false);
  const [cartItems, setCartItem] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([...products]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items && items.length > 0) {
      setCartItem(items);
    }
  }, []);
  return (
    <div>
      <main className="wrapper">
        <Head>
          <title>Company Name - Products</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <FilterSidebar
          categories={categories}
          toggleSidebar={toggleSidebar}
          showSidebar={showSidebar}
          setFilteredProducts={setFilteredProducts}
          products={products}
        />
        <FilterMenu
          toggleSidebar={toggleSidebar}
          showSidebar={showSidebar}
          cartItemLength={cartItems.length}
        />
        {
          filteredProducts.length > 0
            ? <div className="container">
              {
                filteredProducts.map((product, i) => (
                  <ProductCard
                    productId={product.id}
                    imgSrc={product.image}
                    itemTitle={product.title}
                    rating={product.rating.rate}
                    ratingCount={parseInt(product.rating.count)}
                    price={product.price}
                    categoryName={product.category}
                    cartItems={cartItems}
                    handleAddItem={setCartItem}
                    key={`product-${i}`}
                  />
                ))
              }
            </div>
            : <div className="empty-grid">No data found</div>
        }
      </main>
      { showSidebar && <div className="overlay"></div> }
    </div>
  );
}

export async function getServerSideProps() {
  const categories = axios.get('https://fakestoreapi.com/products/categories');
  const products = axios.get('https://fakestoreapi.com/products/');
  const promises = await Promise.all([categories, products]);
  const data = {
    categories: promises[0].data,
    products: promises[1].data,
  };
  return { props: { data } };
}
