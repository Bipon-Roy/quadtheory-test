import { FaArrowRightLong, FaInstagram } from "react-icons/fa6";
import { IoLogoGoogle } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import footerImg from "../../assets/Image2.png";
const Footer = () => {
    return (
        <footer className="bg-primary pb-14">
            <div className="max-w-7xl mx-auto flex justify-between">
                <div>
                    <div className="lg:w-[580px] relative mt-14">
                        <input
                            type="text"
                            placeholder="Enter Your Email"
                            className="input w-full rounded-2xl focus:outline-none h-[52px]"
                            required
                        />

                        <button className="bg-secondary px-9 rounded-xl py-2 text-white flex items-center gap-1 absolute top-[6px] right-3">
                            Subscribe
                            <span>
                                <FaArrowRightLong />
                            </span>
                        </button>
                    </div>
                    <div className="mt-24 w-[650px]">
                        <p className="text-3xl font-black opacity-90">
                            pti<span className="text-secondary">.</span>
                        </p>

                        <div className="mt-5 ml-2 flex justify-between">
                            <p className="text-base font-semibold opacity-90 tracking-wide">
                                Copyright&copy;Tripp.All Right Reserved
                            </p>

                            <div className="flex gap-2">
                                <div className="bg-[#FEDDBA] p-2 rounded-full">
                                    <span>
                                        <IoLogoGoogle className="text-secondary text-lg" />
                                    </span>
                                </div>
                                <div className="bg-[#FEDDBA] p-2 rounded-full">
                                    <span>
                                        <FaTwitter className="text-secondary text-lg" />
                                    </span>
                                </div>
                                <div className="bg-[#FEDDBA] p-2 rounded-full">
                                    <span>
                                        <FaInstagram className="text-secondary text-lg" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <img src={footerImg} className="h-[320px]" alt="Footer Image" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
