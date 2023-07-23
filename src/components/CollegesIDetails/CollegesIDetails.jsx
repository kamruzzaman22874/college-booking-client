import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

const CollegesIDetails = ({college}) => {
    const { _id, image, name, admissionDates, events, ResearchNumber, sports,rating } = college;
    return (
        <div className="md:my-12 mt-5">
            <div className="rounded-lg shadow-md flex flex-col justify-between p-4 h-full bg-white">
                <div>
                    <img
                        className="w-full h-48 object-cover object-center rounded-lg"
                        src={image}
                        alt="College"
                    />
                    <h3 className="text-xl font-semibold my-2">College Name: {name}</h3>
                    <p className='flex gap-3 items-center'>
                        <Rating
                            className="font-bold text-xl text-yellow-400"
                            readonly
                            placeholderRating={rating}
                            emptySymbol={<AiOutlineStar />}
                            placeholderSymbol={<AiFillStar />}
                            fullSymbol={<img src="assets/images/star-yellow.png" className="icon" />}
                        />
                        <span>{rating}</span>
                    </p>
                    <p className="text-gray-600 mb-2 font-semibold">Admission Dates: {admissionDates}</p>

                    <p className="mb-2">
                        <span className="font-semibold">Research Number: {ResearchNumber} </span>
                    </p>
                    
                </div>
                <button className="w-full">
                    <Link to={`/college/${_id}`} className="block px-4 py-2 bg-[#79dd80] rounded text-white">
                        Details
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default CollegesIDetails;
