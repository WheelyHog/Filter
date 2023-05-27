import { getProductsAction } from './store/productReducer';

export const fetchProductsList = () => {
	return function (dispatch) {
		fetch('https://dummyjson.com/products')
			.then((res) => res.json())
			.then((data) => dispatch(getProductsAction(data.products)));
	};
};
