import { useState } from 'react';

export default function FilterSidebar({
  toggleSidebar,
  showSidebar,
  categories,
  setFilteredProducts,
  products,
}) {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  function filterProducts() {
    const filteredProducts = products.filter((prd) => prd.title.includes(keyword) 
      && prd.category.includes(category)
    );

    setFilteredProducts(filteredProducts);
    toggleSidebar(!showSidebar);
  }

  return (
    <aside className={`sidebar${showSidebar ? ' active' : ''}`}>
      <div className="sidebar__content">
        <h1>Filters</h1>
        <label className="input-label">Keyword</label>
        <input
          type="text"
          className="input-control"
          value={keyword}
          onChange={(evt) => { setKeyword(evt.target.value) }}
        />
        <label className="input-label">Category</label>
        <select
          className="input-control"
          value={category}
          onChange={(evt) => { setCategory(evt.target.value) }}
        >
          <option value="" key="category-0">Select a category</option>
          { categories.map((cat, i) => (
            <option value={cat} key={`category-${i+1}`}>{cat}</option>
          )) }
        </select>
      </div>
      <div className="sidebar__footer">
        <button
          className="btn white outline"
          onClick={() => { toggleSidebar(!showSidebar); }}
        >Cancel</button>
        <button
          className="btn accent"
          onClick={filterProducts}
        >Apply</button>
      </div>
    </aside>
  );
}
