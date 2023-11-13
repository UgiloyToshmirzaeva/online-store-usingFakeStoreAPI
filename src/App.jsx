import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Showcase from './pages/Showcase'
import Shop from './pages/Shop'
import ProductList from './Components/ProductList'
import ProductDetail from './Components/ProductDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Showcase />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/product" element={<ProductList />} />
          <Route path="/shop/product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
