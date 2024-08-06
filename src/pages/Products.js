import React, { useEffect, useState } from 'react';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [editDescriptionId, setEditDescriptionId] = useState(null);
  const [newDescription, setNewDescription] = useState('');

  useEffect(() => {
    fetch(`${API_BASE_URL}/products`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const markOutOfStock = (productId) => {
    fetch(`${API_BASE_URL}/products/${productId}/out-of-stock`, {
      method: 'PUT',
    })
    .then(response => response.json())
    .then(updatedProduct => {
      setProducts(products.map(p =>
        p.id === updatedProduct.id ? updatedProduct : p
      ));
    })
    .catch(error => console.error('Error updating product stock status:', error));
  };

  const updateDescription = (productId) => {
    fetch(`${API_BASE_URL}/products/${productId}/description`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newDescription),
    })
    .then(response => response.json())
    .then(updatedProduct => {
      setProducts(products.map(p =>
        p.id === updatedProduct.id ? updatedProduct : p
      ));
      setEditDescriptionId(null);
      setNewDescription('');
    })
    .catch(error => console.error('Error updating product description:', error));
  };

  return (
    <div className="product-list">
      <h1>All Products</h1>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>
                {editDescriptionId === product.id ? (
                  <>
                    <input
                      type="text"
                      value={newDescription}
                      onChange={(e) => setNewDescription(e.target.value)}
                    />
                    <button onClick={() => updateDescription(product.id)}>
                      Save
                    </button>
                  </>
                ) : (
                  product.description
                )}
              </td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.isInStock ? 'In Stock' : 'Out of Stock'}</td>
              <td>
                {product.isInStock && (
                  <button onClick={() => markOutOfStock(product.id)}>
                    Mark as Out of Stock
                  </button>
                )}
                {!editDescriptionId && (
                  <button onClick={() => {
                    setEditDescriptionId(product.id);
                    setNewDescription(product.description);
                  }}>
                    Edit Description
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductListPage;
