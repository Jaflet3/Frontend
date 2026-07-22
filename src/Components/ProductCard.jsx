import {Link} from "react-router-dom";
import { useCart } from "../context/CartContext";


function ProductCard({product}){
const { addToCart } = useCart();


return(

<div className="card">


<img src={product.image}/>


<h3>
{product.name}
</h3>


<p>
₹{product.price}
</p>


<button type="button" onClick={() => addToCart(product)}>
Add Cart
</button>


<Link to={`/product/${product.id}`}>
View Details
</Link>


</div>

)

}


export default ProductCard;
