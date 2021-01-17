import Router from './Router'
import useFetchDiscounts from './hooks/useFetchDiscounts'

function App() {
  const { discounts } = useFetchDiscounts()

  return discounts && (
    <div>
      <Router />
    </div>
  );
}

export default App;
