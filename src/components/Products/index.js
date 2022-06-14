// Write your JS code here
import Header from '../Header'
import './index.css'

const Products = () => (
  <div>
    <Header />
    <div className="product-container">
      <img
        className="product-image"
        alt="products"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
      />
    </div>
  </div>
)

export default Products
