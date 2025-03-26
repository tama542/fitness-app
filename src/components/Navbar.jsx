import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="bg-orange-500 text-white p-7 fixed w-full top-0 opacity-150  ">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link to="/homepage">PUMP FITNESS</Link>
                </div>
                {/* Hamburger Menu Icon */}
                <div className="md:hidden" onClick={toggleMenu}>
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </div>
                {/* Menu Links */}
                <ul
                    className={`flex flex-col md:flex-row md:space-x-4 absolute md:static bg-orange-500 md:bg-transparent w-full md:w-auto left-0 p-4 md:p-0 transition-all duration-300 ease-in-out ${isOpen ? 'top-16' : '-top-96'
                        }`}
                >

                    <li className="py-2 md:py-0">
                        <Link to="/homepage" onClick={() => setIsOpen(false)}>
                            HomePage
                        </Link>
                    </li>


                    <li className="py-2 md:py-0">
                        <Link to="/workoutgen" onClick={() => setIsOpen(false)}>
                            Workout
                        </Link>
                    </li>

                    <li className="py-2 md:py-0">
                        <Link to="/workout" onClick={() => setIsOpen(false)}>
                            Workout
                        </Link>
                    </li>

                  
                 
                    <li className="py-2 md:py-0">
                        <Link to="/nutritiontracker" onClick={() => setIsOpen(false)}>
                            Nutrition-Tracker
                        </Link>
                    </li>
                    <li className="py-2 md:py-0">
                        <Link to="/work" onClick={() => setIsOpen(false)}>
                            Work
                        </Link>
                    </li>
                    <li className="py-2 md:py-0">
                        <Link to="/contactform" onClick={() => setIsOpen(false)}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;