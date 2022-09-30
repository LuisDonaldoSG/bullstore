import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '../context/AppContext';
import arrow from '@icons/flechita.svg';
import Image from 'next/image';
import styles from '@styles/MyOrder.module.scss'

const MyOrder = () => {
	const { state, toggleOrder } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	const payment = () => {
		if (state.cart.length > 0) {
			const haveToPay =  Math.floor(Math.random() * (3 - 0 + 0) + 0)
			const chiefsHavetoPay = ['El Saúl te debe 3 de esos','El Leo te lo paga', 'El Maik lo picha']
			alert(chiefsHavetoPay[haveToPay])
		} else {
			alert('No has agregado ningún producto')
		}

	}

	return (
		<aside className ={styles.MyOrder}>
			<div className ={styles["MyOrder-container"]}>
				<div className ={styles["title-container"]} onClick={() => toggleOrder()}>
					<Image className ={`${styles["more-clickable-area"]} ${styles.pointer}`} src={arrow} alt="arrow" />
					<p className ={styles.title}>Mi carrito</p>
				</div>
				<div className ={styles["my-order-content"]}>
					<div className = {styles["my-orders"]}>
						{state.cart.map((product) => (
							<OrderItem product={product} key={`orderItem-${product.id}`} />
						))}
					</div>
					<div className={styles.order}>
						<p>
							<span>Total</span>
						</p>
						<p>${sumTotal()}</p>
					</div>
					<button  
						className={styles["primary-button"]}
						onClick = {() => payment()}
					>
						Pagar
					</button>
				</div>
			</div>
		</aside>
	);
}

export default MyOrder;
