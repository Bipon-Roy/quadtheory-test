import bannerImg from "../../assets/Image1.png";

const Banner = () => {
    return (
        <div className="md:bg-primary rounded-3xl mt-12 md:mt-20 md:mx-6 lg:mx-0">
            <div className="flex flex-col md:flex-row justify-center pt-6 md:px-6 lg:px-0 md:gap-8">
                <div className=" space-y-6 text-black my-auto mx-1">
                    <h1 className="text-3xl lg:text-5xl text-[#11263C] font-medium md:text-white text-center md:text-left md:w-[300px] lg:w-[440px] opacity-95 md:opacity-100">
                        Deliver Food To Your Door Step|
                    </h1>
                    <p className="text-base md:text-sm lg:text-lg text-[#11263C] font-medium md:text-white opacity-70 text-center md:text-left">
                        Authentic Food|,Quick Service,Fast Delivery
                    </p>
                </div>
                <div className="mx-2 mt-20 rounded-3xl h-48 md:h-fit bg-[#FD9460] md:bg-transparent md:m-0 relative">
                    <img
                        className="absolute bottom-0 md:static"
                        src={bannerImg}
                        alt="BannerImage"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
