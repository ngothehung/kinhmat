import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({ cartItems }) => {
  if (cartItems.length === 0) {
    return (
      <div>
        <h2>Giỏ hàng của bạn trống</h2>
        <Link to="/">Quay lại trang chủ</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Giỏ hàng của bạn</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt="Product" />
            <div>
              <h3>{item.name}</h3>
              <p>Giá: {item.price}</p>
              <p>Số lượng: {item.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/">Tiếp tục mua hàng</Link>
      <button>Thanh toán</button>
    </div>
  );
};

export default CartPage;
