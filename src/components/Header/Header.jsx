import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            Wallmart <Link to="/cart">Carrito</Link> <Link to="/">Home</Link>
        </header>
    )
}

export default Header