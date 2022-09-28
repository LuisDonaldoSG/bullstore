import React, { useContext } from 'react';
import Link from 'next/link';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss'
import Image from 'next/image';

const Header = () => {
	const { state, toggleOrder } = useContext(AppContext);

	return (
		<>
			<nav className={styles.Nav}>
				<div className={styles["navbar-left"]}>
					<Link href={'/'}>
						<h1 className={styles["nav-logo"]}>Bullstore</h1>
					</Link>
					
				</div>
				<div className={styles["navbar-right"]}>
					<ul>
						<li className={`${styles["more-clickable-area"]} ${styles["navbar-email"]} ${styles.pointer}`} >
							LuisElDonaldo@bullgra.mx
						</li>
						<li
							className={styles["navbar-shopping-cart"]}
							onClick={() => toggleOrder()}
						>
							<Image className={`${styles["more-clickable-area"]} ${styles.pointer}`} src={shoppingCart} alt="shopping cart" />
							{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
						</li>
					</ul>
				</div>
			</nav>
			{state.orderIsOpen && <MyOrder />}
		</>
	);
}

export default Header;
