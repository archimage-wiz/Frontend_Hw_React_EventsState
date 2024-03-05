import "./ProductCard.css";

export function ProductCard({ product }) {
    return (
        <div className="product_card">
            <h3>{product.name}</h3>
            <p style={{color: product.color}}>{product.color}</p>
            <img style={{width: "200px"}} src={product.img} alt={product.name} />
            <div className="price_btn">
                Price: {product.price}
                <button className="pc_btn">В корзину</button>
            </div>
        </div>
    );
}
