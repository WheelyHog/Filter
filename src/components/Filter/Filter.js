import { useRef, useState } from 'react';
import {
	sortByDefaultAction,
	sortByPriceDesctAction,
	sortByRangeAction,
} from '../../store/productReducer';
import s from './Filter.module.css';
import { useDispatch } from 'react-redux';

// export default function Filter() {
// 	const refFrom = useRef();
// const refTo = useRef();

// 	const dispatch = useDispatch();

// 	const handleSortOption = (e) => {
// 		e.preventDefault();

// 		switch (e.target.value) {
// 			case 'default':
// 				dispatch(sortByDefaultAction());
// 				break;
// 			case 'priceDesc':
// 				dispatch(sortByPriceDesctAction());
// 				break;
// 			case 'priceAsc':
// 				console.log(e.tagret.value);
// 				break;
// 			default:
// 				break;
// 		}
// 	};

// 	const handleRange = (e) => {
// 		const targetInput = e.target.name;
// 		const newValue = e.target.value;
		
// 			const range = {
// 				from: targetInput === 'from' ? newValue : refFrom.current.value || -Infinity,
// 				to: targetInput === 'to' ? newValue : refTo.current.value || Infinity,
// 			};

// 			dispatch(sortByRangeAction(range));
// 	};

// 	return (
// 		<div className={s.filter}>
// 			<label>Sort by</label>
// 			<select onInput={handleSortOption}>
// 				<option value="default">default</option>
// 				<option value="priceDesc">price descending</option>
// 				<option value="priceAsc">price ascending</option>
// 			</select>

// 			<div className={s.range_wrapper}>
// 				<input
// 					type="number"
// 					step=".1"
// 					min="0"
// 					ref ={refFrom}
// 					placeholder="from"
// 					name="from"
// 					onChange={handleRange}
// 				/>
// 				<input
// 					type="number"
// 					step=".1"
// 					min="0"
// 					ref ={refTo}
// 					placeholder="to"
// 					name="to"
// 					onChange={handleRange}
// 				/>
// 			</div>
// 		</div>
// 	);
// }
// =============================================
// вариант с type='number' и state 

// export default function Filter() {
// 	const [{ from = '', to = '' }, setRange] = useState({});

// 	const dispatch = useDispatch();

// 	const handleSortOption = (e) => {
// 		e.preventDefault();

// 		switch (e.target.value) {
// 			case 'default':
// 				dispatch(sortByDefaultAction());
// 				break;
// 			case 'priceDesc':
// 				dispatch(sortByPriceDesctAction());
// 				break;
// 			case 'priceAsc':
// 				console.log(e.tagret.value);
// 				break;
// 			default:
// 				break;
// 		}
// 	};

// 	const handleRange = (e) => {
// 		const targetInput = e.target.name;
// 		const newValue = e.target.value;

// 			setRange((prevRange) => ({
// 				...prevRange,
// 				[targetInput]: newValue,
// 			}));

// 			const range = {
// 				from: targetInput === 'from' ? newValue : from || -Infinity,
// 				to: targetInput === 'to' ? newValue : to || Infinity,
// 			};

// 			dispatch(sortByRangeAction(range));
// 	};

// 	return (
// 		<div className={s.filter}>
// 			<label>Sort by</label>
// 			<select onInput={handleSortOption}>
// 				<option value="default">default</option>
// 				<option value="priceDesc">price descending</option>
// 				<option value="priceAsc">price ascending</option>
// 			</select>

// 			<div className={s.range_wrapper}>
// 				<input
// 					type="number"
// 					step=".1"
// 					min="0"
// 					value={from || ''}
// 					placeholder="from"
// 					name="from"
// 					onChange={handleRange}
// 				/>
// 				<input
// 					type="number"
// 					step=".1"
// 					min="0"
// 					value={to || ''}
// 					placeholder="to"
// 					name="to"
// 					onChange={handleRange}
// 				/>
// 			</div>
// 		</div>
// 	);
// }
// ===========================================

// вариант с type="text" и state

export default function Filter() {
	const [{ from = '', to = '' }, setRange] = useState({});
	const dispatch = useDispatch();

	const handleSortOption = (e) => {
		e.preventDefault();

		switch (e.target.value) {
			case 'default':
				dispatch(sortByDefaultAction());
				break;
			case 'priceDesc':
				dispatch(sortByPriceDesctAction());
				break;
			case 'priceAsc':
				console.log(e.tagret.value);
				break;
			default:
				break;
		}
	};

	const handleRange = (e) => {
		const targetInput = e.target.name;
		const newValue = e.target.value.replace(',', '.');

		if (!isNaN(newValue)) {
			setRange((prevRange) => ({
				...prevRange,
				[targetInput]: newValue,
			}));

			const range = {
				from: targetInput === 'from' ? newValue : from || -Infinity,
				to: targetInput === 'to' ? newValue : to || Infinity,
			};

			dispatch(sortByRangeAction(range));
		}
	};

	return (
		<div className={s.filter}>
			<label>Sort by</label>
			<select onInput={handleSortOption}>
				<option value="default">default</option>
				<option value="priceDesc">price descending</option>
				<option value="priceAsc">price ascending</option>
			</select>

			<div className={s.range_wrapper}>
				<input
					type="text"
					value={from || ''}
					placeholder="from"
					name="from"
					onChange={handleRange}
				/>
				<input
					type="text"
					value={to || ''}
					placeholder="to"
					name="to"
					onChange={handleRange}
				/>
			</div>
		</div>
	);
}
