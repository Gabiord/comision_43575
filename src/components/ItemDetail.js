import ItemCount from './ItemCount';

const ItemDetail = ({ price , title , description , image , stock }) => {


    const onAdd = (parametro) => {
        console.log(parametro)
    }

    return (
        <div>
            <h1>{title} - ${price}</h1>
            <img src={image} alt="picsum" />
            <p>{description}</p>
            <ItemCount stock={stock} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail