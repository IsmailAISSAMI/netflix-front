import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import CartContext from "../../../context/CartContext";
import Image from "next/image";
import styles from "./ProductCard.module.scss";
import { toast, ToastContainer } from "react-nextjs-toast";

const ProductCard = (props) => {
  const { addItem } = useContext(CartContext);

  const handleAddToWishList = () => {
    toast.notify(`Votre produit est bien ajouté au panier`, {
      duration: 15,
      type: "success",
    });
    addItem(props.product);
  };

  return (
    <div className={styles.product__card}>
      <ToastContainer align={"right"} position={"top"} />
      <Link href={`/shop/${props.product.id}`}>
        <a>
          <Image
            src={props.product.img}
            alt={props.product.title}
            width="200"
            height="200"
            layout="intrinsic"
          />
          <h2>{props.product.title}</h2>
          <p className={styles.price}>{props.product.price} €</p>
        </a>
      </Link>
      <div className={styles.btn__group}>
        <button onClick={() => handleAddToWishList}>
          <Icon icon="carbon:add-filled" color="black" width="24" height="24" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
