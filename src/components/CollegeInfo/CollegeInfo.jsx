import { Link } from "react-router-dom";

const CollegeInfo = ({ college }) => {
    const { _id, image, name, admissionDates, events, researchHistory, sports } = college;

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
                    <p className="text-gray-600 mb-2 font-semibold">Admission Dates: {admissionDates}</p>

                    <p className="mb-2">
                        <span className="font-semibold">Events: {events} </span>
                    </p>
                    <p className="mb-2">
                        <span className="font-semibold">Research History: {researchHistory} </span>
                    </p>
                    <p>
                        <span className="font-semibold">Sports: {sports} </span>
                    </p>
                </div>
                    <button className="w-full">
                        <Link to={`/colleges/${_id}`} className="block px-4 py-2 bg-[#79dd80] rounded text-white">
                            Details
                        </Link>
                    </button>
            </div>
        </div>



    );
};

export default CollegeInfo;