/* eslint-disable react/jsx-pascal-case */
import './App.css';
import Header from './pages/header/Header.jsx'
import Banner from './pages/banner/Banner';
import Product from './pages/product/Product';
import ListProduct from './pages/list_product/List_Product';
import Brand_Story from './pages/brand_story/Brand_story.jsx'
import Issue from './pages/issue/Issue';
import Happen from './pages/happen/Happen';
import Footer from './pages/footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Product />
      <ListProduct />
      <Brand_Story />
      <Issue />
      <Happen />
      <Footer />
    </div>
  );
}

export default App;
