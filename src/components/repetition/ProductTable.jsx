import React from "react";
import products from "../data/products";
import "./ProductTable.css";

export default () => {
  const product_list = products.map((product, i) => {
    return (
      <tr key={product.id} className={i % 2 === 0 ? 'odd' : 'even'}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>US$ {product.price.toFixed(2).replace('.', ',')}</td>
      </tr>
    )
  })

  return (
    <div className="ProductTable">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {product_list}
        </tbody>
      </table>
    </div>
  )
}