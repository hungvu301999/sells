import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSigup from './Pages/LoginSigup';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import Footer from './Components/Footer/Footer';
function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Shop />} />
                    <Route path="/mens" element={<ShopCategory category="men" />} />
                    <Route path="/womens" element={<ShopCategory category="women" />} />
                    <Route path="/kids" element={<ShopCategory category="kid" />} />
                    <Route path="/product" element={<Product />}>
                        <Route path="/product/:productId" element={<Product />} />
                    </Route>
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<LoginSigup />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
