import { ListItem } from "./ListItem/ListItem.jsx";
import "./ListView.css";

export function ListView({ products }) {
    return (<>
    <div className="list_items_container">
        {products.map((product, index) => (
            <ListItem product={product} key={index} />
        ))}
    </div>
    </>);
}
