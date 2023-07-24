import { Link, useLoaderData } from 'react-router-dom';

const CollegeDetails = () => {
    const collegeData = useLoaderData()
    const { image, name, admissionProcess, eventsDetails, researchWorks, sportsCategories }=collegeData
    return (
        <div className="rounded-lg  mt-20 shadow-md p-4 bg-white px-20">
            <img
                className="w-full h-[400px] object-cover object-center rounded-lg"
                src={image}
                alt="College"
            />
            <h3 className="text-xl font-semibold my-2">College Name : {name}</h3>
            <p className="text-gray-600 mb-2 text-justify">Admission Process: {admissionProcess}</p>

            <p className="mb-2">
                <span className=""> <span className='font-semibold'>Events</span>: <br /> 
                {eventsDetails.one} <br /> 
                {eventsDetails.two} <br /> 
                {eventsDetails.three} <br /> 
                {eventsDetails.four} <br /> 
                {eventsDetails.five} <br /> 
                </span>

            </p>
            <p className="mb-2">
                <span className="font-semibold">Research Work </span>: <br />
                <span>
                    {researchWorks.one} <br />
                    {researchWorks.two} <br />
                    {researchWorks.three} <br />
                </span> 
            </p>
            <p>
                <span className="font-semibold">Sports:</span> <br /> 
                <span>
                    {sportsCategories.one} <br />
                    {sportsCategories.two} <br />
                    {sportsCategories.three} <br />
                </span>
            </p>
            <button className="mt-4 bg-[#79dd80] hover:bg-[#15701b] text-white font-bold py-2 px-4 rounded">
                <Link to="/">Back to Home</Link>
            </button>
        </div>
    );
};

export default CollegeDetails;