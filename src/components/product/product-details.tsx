import { useState } from "react";
import Divider from "../divider"
import ProductQuantityInput from "./product-quantity-input"
import ProductPrice from "./product-price";
import ProductButtons from "./product-buttons";
import ProductDescription from "./product-description";

const ProductDetails = () => {
    const [productQuantity, setProductQuantity] = useState<number>(1);

  return (
    <div>
       <p className="text-2xl">Qog'oz sochiqlar Oila tanlovi, 2 qatlamli, 2 dona</p>
       <Divider className="my-3" />
        <ProductQuantityInput value={productQuantity} setValue={setProductQuantity} />
        <ProductPrice />
        <ProductButtons />
        <ProductDescription />
    </div>
  )
}

export default ProductDetails