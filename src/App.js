import Router from './Router'
import useCart from './useCart';

function App() {
  const { cartItems, addItem, removeItem, substractItem, get } = useCart()
  return (
    <div>
      <Router
        substractItem={substractItem}
        addItem={addItem}
        cartItems={cartItems}
        removeItem={removeItem}
        get={get}
      />
    </div>
  );
}

export default App;
