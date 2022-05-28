export default function Cart({ cartItemLength }) {
  return (
    <button className="btn">
      <i className="fa fa-shopping-cart m-i-end-half"></i>
      <span>Cart</span>
      { cartItemLength > 0 && <span className="badge">{cartItemLength}</span> }
    </button>
  );
}
