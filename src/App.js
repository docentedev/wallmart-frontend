import React from 'react'
import styles from './App.module.css';

function App() {
  const [products, setProducts] = React.useState([])
  const [discounts, setDiscounts] = React.useState([])

  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/v1/products`)
      .then(response => response.json())
      .then(data => setProducts(data.data))
    fetch(`${process.env.REACT_APP_API_URL}/api/v1/discounts`)
      .then(response => response.json())
      .then(data => setDiscounts(data.data))
  }, [])

  const wrapperHandlerAdd = (product) => () => {
    console.log(product)
  }
  return (
    <div>
      <header>
        Wallmart
      </header>
      <section className={styles.area_products}>
        {products.length > 0 ? products.map(e => (
          <article className={styles.product} key={e._id}>
            <div className={styles.product__image}>
              <img src={e.image} alt={e.description} />
            </div>
            <div className={styles.product__info}>
              <h3><strong>{e.brand}</strong> {e.description}</h3>
              <strong>{e.price}</strong>
            </div>
            <div className={styles.product__actions}>
              <button onClick={wrapperHandlerAdd(e)}>Agregar</button>
            </div>
          </article>
        )) : (
            <div>Loading...</div>
          )}
      </section>
    </div>
  );
}

export default App;
