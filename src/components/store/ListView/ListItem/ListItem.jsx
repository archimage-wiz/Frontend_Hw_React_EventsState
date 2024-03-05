import "./ListItem.css";

export function ListItem({ product }) {
    return (<>
    <div className="list_item">
        <img style={{height: "100px", borderRadius: "50px"}} src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
        <span style={{color: product.color}}>{product.color}</span>
        <div>Price: ${product.price}</div>
        <button className="pc_btn">В корзину</button>

    </div>
    </>);
}
