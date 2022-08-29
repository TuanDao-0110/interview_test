import './App.css';
import Header from './pages/header/Header.jsx'
import Banner from './pages/banner/Banner';
import Product from './pages/product/Product';
import ListProduct from './pages/list_product/List_Product';
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Product />
      <ListProduct />
    </div>
  );
}

export default App;
