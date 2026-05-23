import AdBanner from "./components/ad-banner/ad-banner"
import CategoryProducts from "./components/category-products/category-products"
import Header from "./components/header/header"
import NavCategories from "./components/nav-categories/nav-categories"
 
function App(){
  return (
    <div className="container">
      <Header /> 
      <NavCategories />
      <AdBanner />
      <CategoryProducts />
    </div>
  )
}

export default App