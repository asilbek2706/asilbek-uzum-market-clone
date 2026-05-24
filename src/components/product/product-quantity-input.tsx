import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { type ChangeEvent, type Dispatch, type SetStateAction } from "react";

interface ProductQuantityInputProps {
    value: number;
    setValue: Dispatch<SetStateAction<number>>;
}

const ProductQuantityInput = ({
    value,
    setValue,
}: ProductQuantityInputProps) => {
    const incrementQuantity = () => setValue((prev) => prev + 1);
    const decrementQuantity = () => setValue((prev) => Math.max(prev - 1, 1));
    const changeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value;
        if (raw.includes("-")) return;
        const parsed = parseInt(raw, 10);
        setValue(isNaN(parsed) ? 1 : Math.max(parsed, 1));
    };

    const onBlurInput = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (!value) {
            setValue(1);
        }
    };
    return (
        <div>
            <div
                className="flex items-center gap-2
 border rounded-md border-gray-300 w-fit"
            >
                <div className="p-2">
                    <MinusIcon
                        onClick={decrementQuantity}
                        className="w-5 cursor-pointer"
                    />
                </div>
                <input
                    type="number"
                    value={value}
                    onChange={changeQuantity}
                    onBlur={onBlurInput}
                    className="text-center outline-none w-10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <div className="p-2">
                    <PlusIcon
                        onClick={incrementQuantity}
                        className="w-5 cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductQuantityInput;
