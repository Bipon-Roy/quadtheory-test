import bannerImg from "../../assets/Image1.png";

const Banner = () => {
    return (
        <div className="md:bg-primary rounded-3xl mt-20 mx-6 lg:mx-0">
            <div className="flex flex-col md:flex-row justify-center py-6 md:gap-8 mx-6 lg:mx-0">
                <div className=" space-y-6 text-black my-auto">
                    <h1 className="text-3xl lg:text-5xl text-white">
                        Deliver Food To Your <br />
                        Door Step!
                    </h1>
                    <p className="lg:text-lg text-white opacity-70">
                        Authentic Food|,Quick Service,Fast Delivery
                    </p>
                </div>
                <div className="">
                    <img src={bannerImg} alt="BannerImage" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
