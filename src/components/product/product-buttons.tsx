import Button from "../button";

const ProductButtons = () => {
    return (
        <div className="flex items-center gap-2 mt-4 ">
            <Button className="cursor-pointer w-full">Navbatga qo'shish</Button>

            <Button variant={"outline"} className="cursor-pointer w-full">Do'konga o'tish</Button>
        </div>
    );
};

export default ProductButtons;
