import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'
import Order from '../Order'
import './index.css'
import CartSummary from '../CartSummary'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems, isOrderPlaced} = value
      const showEmptyView = cartList.length === 0

      const onRemoveAllCartItems = () => {
        removeAllCartItems()
      }

      return (
        <>
          <Header />
          {isOrderPlaced ? (
            <Order />
          ) : (
            <div className="cart-container">
              {showEmptyView ? (
                <EmptyCartView />
              ) : (
                <div className="cart-content-container">
                  <div className="cart-content-heading-container">
                    <h1 className="cart-heading">My Cart</h1>
                    <button
                      type="button"
                      className="remove-all-button"
                      onClick={onRemoveAllCartItems}
                    >
                      Remove All
                    </button>
                  </div>

                  <CartListView />
                  <CartSummary />
                </div>
              )}
            </div>
          )}
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
