import { useEffect, useState } from "react";
import Addmissions from "../Addmissions/Addmissions";

const Addmission = () => {
    const [addmission , setAddmission] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/addmission")
        .then(res => res.json())
            .then(data => setAddmission(data))
    },[])
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-20 md:px-20">
            {
                addmission?.map(add => <Addmissions
                key={add._id}
                add={add}
                ></Addmissions>)
            }
        </div>
    );
};

export default Addmission;