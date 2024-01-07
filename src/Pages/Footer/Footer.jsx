import { FaArrowRightLong, FaInstagram } from "react-icons/fa6";
import { IoLogoGoogle } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import footerImg from "../../assets/Image2.png";
const Footer = () => {
    return (
        <footer className="bg-primary pb-14 mt-24">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
                <div className="md:ml-4 lg:ml-0">
                    <div className="md:w-[400px] lg:w-[580px] relative mt-14 mx-4 md:mx-0">
                        <input
                            type="text"
                            placeholder="Enter Your Email"
                            className="input w-full md:rounded-2xl focus:outline-none h-[52px]"
                            required
                        />

                        <button className="md:bg-secondary px-5 lg:px-9 rounded-xl py-2 text-secondary font-medium md:text-white flex items-center gap-1 absolute top-[6px] right-3">
                            Subscribe
                            <span>
                                <FaArrowRightLong />
                            </span>
                        </button>
                    </div>
                    <div className="mt-12 md:w-[480px] lg:w-[650px]">
                        <div className="mt-5 flex flex-col md:flex-row md:justify-between">
                            <div className="order-2 md:order-none mt-8 space-y-4">
                                <p className="text-3xl font-black opacity-90 text-center md:text-left">
                                    pti<span className="text-secondary">.</span>
                                </p>
                                <p className="text-base md:ml-2 font-semibold opacity-90 tracking-wide text-center md:text-left">
                                    Copyright&copy;Tripp.All Right Reserved
                                </p>
                            </div>

                            <div className="md:pt-[74px]">
                                <div className="flex justify-center md:justify-end gap-2">
                                    <div className="bg-secondary md:bg-[#FEDDBA] p-2 rounded-full">
                                        <span>
                                            <IoLogoGoogle className="text-white md:text-secondary text-lg" />
                                        </span>
                                    </div>
                                    <div className="bg-secondary md:bg-[#FEDDBA] p-2 rounded-full">
                                        <span>
                                            <FaTwitter className="text-white md:text-secondary text-lg" />
                                        </span>
                                    </div>
                                    <div className="bg-secondary md:bg-[#FEDDBA] p-2 rounded-full">
                                        <span>
                                            <FaInstagram className="text-white md:text-secondary text-lg" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <img src={footerImg} className="hidden md:block h-[320px]" alt="Footer Image" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
