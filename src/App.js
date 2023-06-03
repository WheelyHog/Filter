import './App.css';
import Counter from './components/Counter/Counter';
import Filter from './components/Filter/Filter';
import ProductList from './components/ProductList/ProductList';

function App() {
	return (
		<div className="App">
			<Filter />
			<Counter />
			<ProductList />
		</div>
	);
}

export default App;
