import AdBanner from "./components/ad-banner/ad-banner"
import Header from "./components/header/header"
import NavCategories from "./components/nav-categories/nav-categories"
 
function App(){
  return (
    <div className="container">
      <Header /> 
      <NavCategories />
      <AdBanner />
    </div>
  )
}

export default App