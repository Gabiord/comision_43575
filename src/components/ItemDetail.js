import ItemCount from './ItemCount';

const ItemDetail = ({ titulo, imagen, desc, stock = 5 }) => {


    const onAdd = (parametro) => {
        console.log(parametro)
    }

    return (
        <div>
            <h1>Detalle de Producto 1 - $1000</h1>
            <img src="https://picsum.photos/200/300" alt="picsum" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis quisquam maiores ut veniam. Quas molestias, distinctio enim consectetur facere obcaecati tenetur suscipit at, veritatis iste quia vel sequi tempora et unde sit ad ullam illo quasi quisquam praesentium facilis? Harum quod natus sapiente porro deserunt soluta nam nisi molestiae ducimus?</p>
            <ItemCount stock={stock} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail