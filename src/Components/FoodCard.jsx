const FoodCard = ({ img, title }) => {
    return (
        <div>
            <div className="h-[300px] shadow-md shadow-textMain rounded-xl">
                <img className="rounded-xl h-full w-full object-cover" src={img} alt={title} />
            </div>

            <p className="text-center mt-2 font-medium text-textMain opacity-80">{title}</p>
        </div>
    );
};

export default FoodCard;
