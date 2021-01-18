import Router from './Router'
import useFetchDiscounts from './hooks/useFetchDiscounts'

function App() {
  const { discounts } = useFetchDiscounts()
  return discounts && discounts.length > 0 ? (<Router />): (<span>Cargando...</span>);
}

export default App;
