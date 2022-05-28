import Cart from '../components/Cart';

export default function FilterMenu({ toggleSidebar, showSidebar, cartItemLength }) {
  return (
    <div className="filter-menu">
      <button className="btn" onClick={() => { toggleSidebar(!showSidebar); }}>
        <i className="fa fa-sliders m-i-end-half"></i>
        Filter
      </button>
      <Cart cartItemLength={cartItemLength}/>
  </div>
  );
}
