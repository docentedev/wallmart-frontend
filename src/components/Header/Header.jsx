import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import LiderLogoSvg from '../../lider-logo.svg'
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo_container}>
                <Link to="/">
                    <img src={LiderLogoSvg} alt="Lider Logo" />
                </Link>
            </div>
            <div>
                <Link to="/">Productos</Link>
                <Link to="/cart">Carrito</Link>
            </div>
        </header>
    )
}

export default Header