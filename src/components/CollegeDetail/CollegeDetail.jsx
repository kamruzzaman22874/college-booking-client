import { useEffect } from "react";

const CollegeDetail = (id) => {

    useEffect(() =>{
        fetch(`http://localhost:5000/colleges/${id}`)
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default CollegeDetail;