import { Link } from "react-router-dom"

const Item = ({ producto }) => {
    return (
        <article key={producto.id} className="product-card">
            <h3 className="product-card__title">{producto.title}</h3>
            <img className="product-card__image" src={producto.image} alt={producto.title} />
            <p>{producto.price}</p>
            <Link to={"/item/" + producto.id}>ver mas</Link>
        </article>
    )
}

export default Item