import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import addToCartImage from '@icons/cart-plus-solid.svg';
import addedToCartImage from '@icons/check-solid.svg';
import Image from 'next/image';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
	const { state, addToCart } = useContext(AppContext);

	const handleClick = item => {
		console.log('in cart: ', state.cart.includes(item));
		addToCart(item)
	}

	return (
		<div className={styles.ProductItem}>
			{
				product.images[0].includes('http') && (
					<Image 
						src={product.images[0]} 
						alt={product.title} 
						width={240} 
						height={240} 
					/>
				)
			}
			<div className={styles["product-info"]}>
				<div>
					<p>{product.price} Bullcoins</p>
					<p>{product.title}</p>
				</div>
				<figure className={styles["more-clickable-area"]} onClick={() => handleClick(product)} >
					{  
						state.cart.includes(product) ? (
							<Image 
								className={`${styles.disabled} ${styles["add-to-cart-btn"]}`} 
								src={addedToCartImage} alt="added to cart"
								width={25}
								height={25}
							/>
						) : (
							<Image 
								className={`${styles["add-to-cart-btn"]} ${styles.pointer}`} 
								src={addToCartImage} 
								alt="add to cart"
								width={25}
								height={25} 
							/>
						) 
					}	
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
