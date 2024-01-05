import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center py-8">
                <div className="ml-6 lg:ml-0">
                    <p className="text-3xl font-black">pti.</p>
                </div>
                <div className="flex gap-4">
                    <div className="form-control lg:w-[550px]">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input w-full focus:outline-none"
                            required
                        />
                    </div>
                    {/* Todo: Complete the menu style */}
                    <div className="form-control relative">
                        <select
                            required
                            className="input rounded-lg pl-4 pr-20 border-none font-semibold text-[#012a4a] focus:outline-none"
                        >
                            <option value="">MENU</option>
                            <option value="Employee">Employee</option>
                            <option value="HR">HR</option>
                        </select>
                        <span className="absolute right-1 top-2">
                            <MdOutlineKeyboardArrowDown className="text-3xl text-secondary opacity-80" />
                        </span>
                    </div>
                </div>
                <div className="bg-secondary p-3 rounded-full">
                    <span>
                        <LuUser2 className="text-2xl text-white" />
                    </span>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
