import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [limit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products?limit=100`);
        let items = res.data.products;

        // search filter
        if (search) {
          items = items.filter(p =>
            p.title.toLowerCase().includes(search.toLowerCase())
          );
        }

        // sorting
        if (sortKey) {
          items = [...items].sort((a, b) => {
            if (sortKey === 'title') return a.title.localeCompare(b.title);
            return a[sortKey] - b[sortKey];
          });
        }

        setTotal(items.length);
        setProducts(items.slice(skip, skip + limit));
      } catch (err) {
        console.error("Error fetching products", err);
      }
    };
    fetchProducts();
  }, [skip, limit, search, sortKey]);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>🛍 Product Table</h2>

      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => {
          setSkip(0);
          setSearch(e.target.value);
        }}
        style={{ marginBottom: '10px', padding: '5px' }}
      />

      <select
        value={sortKey}
        onChange={(e) => setSortKey(e.target.value)}
        style={{ marginLeft: '1rem', padding: '5px' }}
      >
        <option value="">Sort by...</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
        <option value="title">Title</option>
      </select>

      <table border="1" cellPadding="8" cellSpacing="0" style={{ width: '100%', marginTop: '10px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price ($)</th>
            <th>Rating </th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>{p.price}</td>
              <td>{p.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => setSkip(Math.max(skip - limit, 0))} disabled={skip === 0}>
          ◀ Prev
        </button>
        <span style={{ margin: '0 1rem' }}>
          Page {Math.floor(skip / limit) + 1} of {Math.ceil(total / limit)}
        </span>
        <button
          onClick={() => setSkip(skip + limit)}
          disabled={skip + limit >= total}
        >
          Next ▶
        </button>
      </div>
    </div>
  );
};

export default ProductTable;
