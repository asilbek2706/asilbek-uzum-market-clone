import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/homepage"
import ProductPage from "./pages/productpage"
 
function App(){
  return (
   <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/product/:id" element={<ProductPage />} />
   </Routes>
  )
}

export default App