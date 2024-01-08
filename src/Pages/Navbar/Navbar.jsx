import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-around md:justify-between items-center py-5 md:py-8 mx-3 md:mx-6 lg:mx-0 border-b-2 md:border-none">
                <div>
                    <p className="text-xl md:text-3xl font-black">pti.</p>
                </div>
                <div className="flex gap-[6px] md:gap-4">
                    <div className="w-[190px] md:w-[280px] lg:w-[550px] relative">
                        <input
                            type="text"
                            placeholder="Search Audiobook"
                            className="input w-full focus:outline-none pl-10 md:pl-12"
                            required
                        />
                        <span className="absolute left-2 top-3 opacity-50">
                            <IoSearch className="text-secondary text-2xl" />
                        </span>
                    </div>

                    <div className="form-control relative">
                        <details className="dropdown">
                            <summary className="btn px-0 w-36 md:w-40 pl-3 bg-white flex justify-between text-[#11263C] opacity-95 font-extrabold hover:border-none hover:bg-white">
                                MENU
                                <MdOutlineKeyboardArrowDown className="text-3xl text-secondary opacity-80" />
                            </summary>
                            <ul className="p-1 shadow dropdown-content z-[1] bg-white rounded-xl w-36 md:w-40">
                                <li className="text-[#11263C] opacity-75 font-medium text-sm cursor-pointer p-1 hover:bg-mainBg hover:text-secondary">
                                    <a>Home</a>
                                </li>
                                <li className="text-[#11263C] opacity-75 font-medium text-sm cursor-pointer p-1 hover:bg-mainBg hover:text-secondary">
                                    <a>Details</a>
                                </li>
                                <li className="text-[#11263C] opacity-75 font-medium text-sm cursor-pointer p-1 hover:bg-mainBg hover:text-secondary">
                                    <a>Category</a>
                                </li>
                                <li className="text-[#11263C] opacity-75 font-medium text-sm cursor-pointer p-1 hover:bg-mainBg hover:text-secondary">
                                    <a>My Favorites</a>
                                </li>
                                <li className="text-[#11263C] opacity-75 font-medium text-sm cursor-pointer p-1 hover:bg-mainBg hover:text-secondary">
                                    <a>Profile</a>
                                </li>
                                <li className="text-[#11263C] opacity-75 font-medium text-sm cursor-pointer p-1 hover:bg-mainBg hover:text-secondary">
                                    <a>Log In/Sign Up</a>
                                </li>
                            </ul>
                        </details>
                    </div>
                </div>
                <div className="bg-secondary p-3 rounded-full hidden md:block">
                    <span>
                        <LuUser2 className="text-2xl text-white" />
                    </span>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
