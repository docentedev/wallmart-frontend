import styles from './Search.module.css'
import {
    Search as SearchIcon,
} from 'react-feather'

const Search = ({ value, onChange}) => {
    return (
        <div className={styles.search}>
            <SearchIcon size={24} />
            <input placeholder="Ingresa producto a buscar" value={value} onChange={
                ({ target }) => onChange(target.value)} />
        </div>
    )
}

export default Search