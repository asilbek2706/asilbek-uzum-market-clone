import ProductDetails from "./product-details"
import ProductImages from "./product-images"

const Product = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
        {/* Product Images */}
        <ProductImages />
        {/* Product Details */}
        <ProductDetails />
    </div>
  )
}

export default Product