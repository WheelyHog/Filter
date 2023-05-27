import { useEffect } from 'react';
import s from './ProductList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsList } from '../../request';
import ProductItem from '../ProductItem/ProductItem';

export default function ProductList() {
	const dispatch = useDispatch();

	const products = useSelector((store) => store.products).filter(
		(product) => product.rangeVisible
	);

	useEffect(() => {
		dispatch(fetchProductsList());
	}, [dispatch]);

	// console.log('ProductList: ', products);
	return (
		<div className={s.products_container}>
			{products.map((elem) => (
				<ProductItem key={elem.id} {...elem} />
			))}
		</div>
	);
}
