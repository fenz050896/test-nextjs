export default function Price({ price }) {
  const decPlaces = price === parseInt(price, 10) ? 0 : 2;
  return (
    <div className="container__item__price">
      <h1>$ {price.toFixed(decPlaces)}</h1>
    </div>
  );
}
