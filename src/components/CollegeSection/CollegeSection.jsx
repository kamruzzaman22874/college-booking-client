import CollegeInfo from "../CollegeInfo/CollegeInfo";
import { useEffect, useState } from "react";

 const CollegeSection = () => {
    const [collegeDatas, setCollegeDatas] = useState([])
    // const collegeDatas = useLoaderData();
    // console.log(collegeDatas);
    useEffect(() =>{
        fetch("http://localhost:5000/college")
        .then(res => res.json())
            .then(data => setCollegeDatas(data))
    }, [])
    return (
        <div className="grid md:grid-cols-3 mt-16 gap-6 md:px-20">
            {
                collegeDatas.slice(0,3).map(college => <CollegeInfo
                key={college.id}
                college={college}
                ></CollegeInfo>)
            }
        </div>
    );
};

export default CollegeSection;