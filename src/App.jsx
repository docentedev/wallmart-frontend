import Router from './Router'
import {
  Loader,
} from 'react-feather'
import useFetchDiscounts from './hooks/useFetchDiscounts'
import useFetchProducts from './hooks/useFetchProducts'

function App() {
  const { items: products } = useFetchProducts()
  const { discounts } = useFetchDiscounts()
  return discounts && discounts.length > 0 ? (<Router products={products} />): (<Loader className="rotating" size={40} />);
}

export default App;
