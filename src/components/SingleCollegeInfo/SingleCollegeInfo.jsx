import { useEffect, useState } from "react";
import CollegesIDetails from "../CollegesIDetails/CollegesIDetails";

const SingleCollegeInfo = () => {
    const [collegeDatas, setCollegeDatas] = useState([])
    useEffect(() => {
        fetch("https://college-booking-server-nine.vercel.app/college")
            .then(res => res.json())
            .then(data => setCollegeDatas(data))
    }, [])

    return (
        <div className="grid md:grid-cols-3 mt-16 gap-6 md:px-20">
            {
                collegeDatas.map(college => <CollegesIDetails
                    key={college.id}
                    college={college}
                ></CollegesIDetails>)
            }
        </div>
    );
};

export default SingleCollegeInfo;