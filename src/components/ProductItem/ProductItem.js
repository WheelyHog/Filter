import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../../store/cartReducer';
import s from './ProductItem.module.css';

export default function ProductItem({ product }) {
	const { title, price, discountPercentage } = product

	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(addToCartAction(product))
	}

	return (
		<div className={s.product_item}>
			<h2> {title}</h2>
			<p>Price: {price} $</p>
			<p>Discont: {discountPercentage} $</p>
			<button onClick={handleClick}>Add to cart</button>
		</div>
	);
}
