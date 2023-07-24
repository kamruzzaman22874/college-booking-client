import { useContext } from "react";
import Banner from "../Banner/Banner";
import CollegeSection from "../CollegeSection/CollegeSection";
import Gallery from "../Gallery/Gallery";
import { AuthContext } from "../../providers/AuthProvider";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    const { filterData } = useContext(AuthContext)
    return (
        <div>
            <Banner />
            <div className="grid md:grid-cols-3 gap-6 px-20">
                {
                    filterData?.map(data => <>

                        <div className="md:my-12 mt-5">
                            <div className="rounded-lg shadow-md flex flex-col justify-between p-4 h-full bg-white">
                                <div>
                                    <img
                                        className="w-full h-48 object-cover object-center rounded-lg"
                                        src={data.image}
                                        alt="College"
                                    />
                                    <h3 className="text-xl font-semibold my-2">College Name: {data?.name}</h3>
                                    <p className='flex gap-3 items-center'>
                                        <Rating
                                            className="font-bold text-xl text-yellow-400"
                                            readonly
                                            placeholderRating={data?.rating}
                                            emptySymbol={<AiOutlineStar />}
                                            placeholderSymbol={<AiFillStar />}
                                            fullSymbol={<img src="assets/images/star-yellow.png" className="icon" />}
                                        />
                                        <span>{data.rating}</span>
                                    </p>
                                    <p className="text-gray-600 mb-2 font-semibold">Admission Dates: {data?.admissionDates}</p>

                                    <p className="mb-2">
                                        <span className="font-semibold">Research Number: {data?.ResearchNumber} </span>
                                    </p>

                                </div>
                                <button className="w-full">
                                    <Link to={`/college/${data?._id}`} className="block px-4 py-2 bg-[#79dd80] rounded text-white">
                                        Details
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </>)
                }
            </div>
            <CollegeSection />
            <Gallery />
            <Reviews/>

        </div>
    );
};

export default Home;