import Header from '../Header'
import './index.css'

// Write your JS code here
const Cart = () => (
  <div>
    <Header />
    <div className="cart-image-container">
      <img
        className="cart-image"
        alt="cart"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
      />
    </div>
  </div>
)
export default Cart
