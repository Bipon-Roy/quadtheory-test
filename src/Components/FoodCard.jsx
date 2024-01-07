import PropTypes from "prop-types";

const FoodCard = ({ img, title }) => {
    return (
        <div>
            <div className="h-[220px] md:h-[300px] w-[100%] shadow-xl shadow-text rounded-xl">
                <img className="rounded-xl h-full w-full object-cover" src={img} alt={title} />
            </div>

            <p className="text-center mt-2 font-medium text-sm md:text-base text-textMain opacity-80">
                {title}
            </p>
        </div>
    );
};

FoodCard.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string.isRequired,
};
export default FoodCard;
