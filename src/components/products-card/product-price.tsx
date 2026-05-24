interface IProps {
    price: number;
}

const ProductPrice = ({ price }: IProps) => {
    const monthlyPrice = Math.round(price / 12);

    return (
        <div className="padding-box">
            <div className="flex items-center font-bold text-purple-700 gap-2">
                <h4>${price}</h4>
                <img src="/icons/card.svg" alt="card" />
            </div>
            <h5 className="text-purple-500 text-sm text">${price}</h5>
            <h5 className="text-purple-500 text-sm text"><mark>{monthlyPrice} so'm/oyiga</mark></h5>
        </div>
    );
};

export default ProductPrice;
