import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useData from "../../Hook/useData";
import FoodCard from "../../Components/FoodCard";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useRef, useState } from "react";
import AddMenuForm from "../../Components/AddMenuForm";

const Recommended = () => {
    const swiperRef = useRef(null);
    const { data, loading, addedRecommendList } = useData();
    const [prevButtonDisabled, setPrevButtonDisabled] = useState(true);
    const [nextButtonDisabled, setNextButtonDisabled] = useState(false);

    useEffect(() => {
        const swiperInstance = swiperRef.current && swiperRef.current.swiper;

        if (swiperInstance) {
            swiperInstance.on("slideChange", () => {
                const currentIndex = swiperInstance.activeIndex;
                const totalSlides = swiperInstance.slides.length;
                const slidesPerView = swiperInstance.params.slidesPerView;

                // Enable/disable buttons based on slide position and slides per view
                setPrevButtonDisabled(currentIndex === 0);
                setNextButtonDisabled(currentIndex + slidesPerView >= totalSlides);
            });
        }
    }, [data]);

    // showing loading state until data fetching is completed
    if (loading) {
        return (
            <div className="flex items-center justify-center">
                <span className="">Please Wait...</span>
            </div>
        );
    }

    //filtering recommended menu only
    const recommendMenu = data.filter((item) => item.IsRecommended === true);
    //rearrange menu item according to design
    const sortedMenu = [
        recommendMenu[1],
        recommendMenu[4],
        recommendMenu[2],
        recommendMenu[5],
        recommendMenu[3],
        recommendMenu[0],
    ];

    const renderMenu = [...addedRecommendList, ...sortedMenu];

    //Added prev and next slider button functionality
    const handlePrevSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNextSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <div className="mt-10 lg:pb-32">
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_8" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>
                    <AddMenuForm />
                </div>
            </dialog>
            <div className="flex justify-between mb-3 mx-4 lg:mx-0">
                <div>
                    <p className="font-medium lg:font-normal text-textMain text-xl ">Recommended</p>
                </div>
                <div className="flex gap-1">
                    <button
                        onClick={() => document.getElementById("my_modal_8").showModal()}
                        className="font-medium text-secondary"
                    >
                        AddMore
                    </button>

                    <div className="flex">
                        <button
                            className={`${
                                prevButtonDisabled === true ? "text-gray-400" : "text-black"
                            } hidden md:block`}
                            onClick={handlePrevSlide}
                            disabled={prevButtonDisabled}
                        >
                            <IoIosArrowBack className="text-xl" />
                        </button>
                        <button
                            className={`${
                                nextButtonDisabled === true ? "text-gray-400" : "text-black"
                            } opacity-60 md:opacity-100`}
                            onClick={handleNextSlide}
                            disabled={nextButtonDisabled}
                        >
                            <IoIosArrowForward className="text-xl" />
                        </button>
                    </div>
                </div>
            </div>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                className="mySwiper"
                loop={true}
                navigation={{
                    prevEl: ".button-prev",
                    nextEl: ".button-next",
                }}
                breakpoints={{
                    375: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 16,
                    },
                }}
                ref={swiperRef}
            >
                {renderMenu.map((item) => (
                    <SwiperSlide className="ml-4 lg:ml-0" key={item.Id}>
                        <FoodCard img={item.ImageUrl} title={item.Name}></FoodCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Recommended;
