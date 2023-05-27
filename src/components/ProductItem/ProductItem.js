import React from 'react';
import s from './ProductItem.module.css';

export default function ProductItem({ title, price, discountPercentage }) {
	return (
		<div className={s.product_item}>
			<h2> {title}</h2>
			<p>Price: {price} $</p>
			<p>Discont: {discountPercentage} $</p>
		</div>
	);
}
