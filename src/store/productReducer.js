const defaultState = [];

const GET_PRODUCTS = 'GET_PRODUCTS';
const SORT_BY_DEFAULT = 'SORT_BY_DEFAULT';
const SORT_BY_PRICE_DESC = 'SORT_BY_PRICE_DESC';
const SORT_BY_RANGE = 'SORT_BY_RANGE';

export const productsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case GET_PRODUCTS:
			// console.log(action.payload);
			return [
				...action.payload.map((product) => ({
					...product,
					rangeVisible: true,
				})),
			];

		case SORT_BY_DEFAULT:
			const copyState = [...state];
			return copyState.sort((a, b) => a.id - b.id);

		case SORT_BY_PRICE_DESC:
			const tempState = [...state];
			return tempState.sort((a, b) => a.price - b.price);

		case SORT_BY_RANGE:
			console.log(action.payload);
			const { from, to } = action.payload;

			return state.map((product) => ({
				...product,
				rangeVisible: product.price >= from && product.price <= to,
			}));

		default:
			return state;
	}
};

export const getProductsAction = (payload) => ({ type: GET_PRODUCTS, payload });
export const sortByDefaultAction = () => ({ type: SORT_BY_DEFAULT });
export const sortByPriceDesctAction = () => ({ type: SORT_BY_PRICE_DESC });
export const sortByRangeAction = (payload) => ({
	type: SORT_BY_RANGE,
	payload,
});
