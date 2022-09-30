import React from 'react';
import ProductItem from '@components/ProductItem';
import styles from '@styles/ProductList.module.scss';

let tempProducts = []
let currentSkip = 0

const ProductList = () => {
	const [products, setProducts] = React.useState([])
	const [productsLength, setProductsLength] = React.useState(0)
	
	React.useEffect(() => {
		window
			.fetch(`/api/products/${currentSkip}`)
			.then((response) => response.json())
			.then(response =>{
				tempProducts = [...response.data]
				setProducts(tempProducts)
				setProductsLength(response.length)
			})
	},[])

	const getMoreProducts = skiping => {
		currentSkip = currentSkip+skiping
		window
			.fetch(`/api/products/${currentSkip}`)
			.then((response) => response.json())
			.then(response =>{
				tempProducts.push(...response.data)
				setProducts([...tempProducts])
		})
	}

	return (
		<section className={styles["main-container"]}>
			<div className={styles.ProductList}>
				{
					products.length > 0 && (
						products.map(product => (	
							<ProductItem 
								product={product} 
								key={product._id} 
							/>
						))
					)
				}
			</div>
			<div className={styles["button-container"]}>
				{
					productsLength !== products.length && (
						<button 
							onClick={() => getMoreProducts(50)}
							>
							Mostrar más.....
						</button>
					)
				}

			</div>
			
		</section>
	);
}

export default ProductList;
