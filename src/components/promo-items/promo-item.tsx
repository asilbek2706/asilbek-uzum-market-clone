interface PromoItemProps {
    image: string;
    title: string;
}

const PromoItem = ({ image, title }: PromoItemProps) => {
    return (
        <div className="w-full rounded-2xl bg-gray-300 h-15 flex items-center gap-3 justify-center star px-4">
            <img
                src={image}
                alt={title}
                className="w-8 h-8 object-contain shrink-0"
            />
            <h3 className="font-medium text-gray-900 truncate">{title}</h3>
        </div>
    );
};

export default PromoItem;
