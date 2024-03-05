import { ProductCard } from "./ProductCard/ProductCard";
import "./CardsView.css";

export function CardsView({ products }) {
    return (
        <>
            <div className="cards_container">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </>
    );
}
