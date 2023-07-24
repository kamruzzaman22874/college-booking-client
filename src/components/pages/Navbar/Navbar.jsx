import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [search , setSearch] = useState();
    const { user, logOut, setFilterData } = useContext(AuthContext)
    const handleLogout = () =>{
        logOut()
        .then(() =>{})
        .catch(err => console.error(err));
    }

    useEffect(() => {
        fetch("http://localhost:5000/college")
            .then(res => res.json())
            .then(data => setSearch(data));
    }, [])

    const handleSearchBar = (e) => {
        const query = (e.target.value.toLowerCase());
        const data = search.filter(item => { 
            item === query
            return item.name.toLowerCase().includes(query)
        })
        setFilterData(data)
    }

  
    return (
        <>
            <div className="flex justify-between items-center p-4 sm:px-8 md:px-20 py-4 shadow-lg fixed z-10 top-0 w-full bg-[#ecf0f3]">
                <Link className="text-2xl" to="/">Campus <span className="text-amber-400">Explorer</span></Link>
                <input onChange={handleSearchBar}
                     type="text" placeholder="Type here" className="md:block hidden input input-bordered input-success w-full max-w-xs" />
             
                <nav className="space-x-4 hidden text-lg md:block">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "text-amber-400" : "white"
                        }
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "text-amber-400" : "white"
                        }
                        to="/college"
                    >
                        Colleges
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "text-amber-400" : "white"
                        }
                        to="/addmission"
                    >
                        Addmission
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "text-amber-400" : "white"
                        }
                        to="/mycollege"
                    >
                        My College
                    </NavLink>
                </nav>
                {
                    user ? 
                    <>
                            <div
                                className='avatar tooltip flex items-center gap-5 tooltip-bottom tooltip-secondary hidden md:block'
                                data-tip={user?.displayName}>
                                <div className='w-10 rounded-full cursor-pointer ring ring-primary ring-offset-base-100 ring-offset-2'>
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                            <button onClick={handleLogout}>
                            <Link className="hidden md:block px-4 py-2 bg-[#79dd80] rounded text-white">
                                Logout
                            </Link>
                            </button>
                            </>
                        : <Link to="/login" className="hidden md:block px-4 py-2 bg-[#79dd80] rounded text-white">
                            Login
                        </Link>
                }
                <button className="md:hidden" onClick={() => setOpen(!open)}>
                    <Bars3BottomRightIcon className="h-6 w-6 text-primary"></Bars3BottomRightIcon>
                </button>
            </div>
            <div className="md:hidden ">
                {open && (
                    <nav className="shadow-xl p-4">
                        <div className="flex flex-col mt-16 text-center gap-2">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-white bg-[#79dd80] md:py-2 px-3 rounded "
                                        : "hover:bg-[#79dd80] px-2 rounded hover:text-white"
                                }
                                to="/"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-white bg-[#79dd80] md:py-2 px-3 rounded"
                                        : "hover:bg-[#79dd80] px-2 rounded hover:text-white"
                                }
                                to="/college"
                            >
                                Colleges
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-white bg-[#79dd80] md:py-2 px-3 rounded"
                                        : "hover:bg-[#79dd80] px-2 rounded hover:text-white"
                                }
                                to="/addmission"
                            >
                                Addmission
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-white bg-[#79dd80] md:py-2 px-3 rounded"
                                        : "hover:bg-[#61d869] px-2 rounded hover:text-white"
                                }
                                to="/mycollege"
                            >
                                My College
                            </NavLink>
                        </div>
                        <div className="md:mt-2 text-center ">
                            <Link to="/login" className="block px-3 py-2 bg-[#79dd80] rounded text-white">
                                Login
                            </Link>
                        </div>
                    </nav>
                    
                )}
            </div>
        </>
    );
};

export default Navbar;