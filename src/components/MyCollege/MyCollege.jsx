import { useLoaderData } from "react-router-dom";
import MyCollegesInfo from "../MyCollegesInfo/MyCollegesInfo";

const MyCollege = () => {
    const myColleges = useLoaderData()
    console.log(myColleges);
    return (
        <div className="my-24 w-[80%] mx-auto">
            {
                myColleges.map(college => <MyCollegesInfo
                key={college._id}
                college={college}
                ></MyCollegesInfo>)
            }
        </div>
    );
};

export default MyCollege;