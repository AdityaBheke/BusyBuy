import { useNavigate } from "react-router-dom";
import { useUserValue } from "../../context/userContext";
import styles from "./productCard.module.css";
import { useState } from "react";

function ProductCard(props) {
  const {title, price, image} = props.product;
  const {handleAddToCart, isLoggedIn} = useUserValue();
  const [buttonText, setButtonText] = useState(<>Add to Cart</>)
  const navigate = useNavigate();
  const handleAdd = async () => {
    try {
      setButtonText(<i className="fi fi-rr-loading"></i>);
      if (isLoggedIn) {
        await handleAddToCart(props.product);
      } else {
        navigate("/signin");
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setButtonText(<>Add to Cart</>);
    }
  };
  return (
    <div className={styles.card} title={title}>
      <img
        src={image}
        alt="product-image"
        className={styles.thumbnail}
      />
      <div className={styles.cardInfo}>
        <span className={styles.title}>{title.length>30?title.substring(0,30)+"...":title}</span>
        <span className={styles.price}>${price}</span>
      </div>

      <button className={styles.addToCart} onClick={handleAdd}>{buttonText}</button>
    </div>
  );
}
export default ProductCard;
