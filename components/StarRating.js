export default function StarRating({
  rating,
  ratingCount,
}) {
  let rounded = (rating | 0);
  const copyRounded = rounded;
  const decimal = rating - rounded;
  const stars = Array(5).fill(0);
  const copyStars = [...stars];
  for (let i = 0; i < stars.length; i+=1) {
    if (rounded > 0) {
      copyStars[i] = 1;
      rounded--;
    }
  }
  copyStars[copyRounded] = decimal;
  return (
    <div className="container__item__rating">
      <span className="rating">
        {
          copyStars.map((val, i) => {
            if (val >= 0.8) {
              return <i className="fa fa-star checked" key={`star-rating-${i}`}></i>;
            } else if (val > 0.25) {
              return <i className="fa fa-star-half-o checked" key={`star-rating-${i}`}></i>;
            } else {
              return <i className="fa fa-star-o checked" key={`star-rating-${i}`}></i>;
            }
          })
        }
      </span>
      { `(${ratingCount})` }
    </div>
  );
}
