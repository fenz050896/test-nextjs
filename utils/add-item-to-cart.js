export default function ({
  cartItems,
  productId,
  itemTitle,
  rating,
  ratingCount,
  price,
  categoryName,
  qty,
}) {
  const cpCartItems = [...cartItems];
  const idx = cpCartItems.findIndex((prd) => prd.id == productId);
  if (idx > -1) {
    cpCartItems[idx].qty = parseInt(cpCartItems[idx].qty) + 1;
  } else {
    const cart = {
      id: productId,
      title: itemTitle,
      rating: {
        rate: rating,
        count: ratingCount,
      },
      price,
      category: categoryName,
      qty,
    };
    cpCartItems.push(cart);
  }
  localStorage.setItem('items', JSON.stringify(cpCartItems));
  return cpCartItems;
}
