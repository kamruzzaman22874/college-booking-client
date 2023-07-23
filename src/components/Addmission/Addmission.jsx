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
        <div className="mt-20 px-20">
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