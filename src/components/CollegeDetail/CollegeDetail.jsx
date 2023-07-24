import { useEffect } from "react";

const CollegeDetail = (id) => {

    useEffect(() => {
        fetch(`https://college-booking-server-nine.vercel.app/colleges/${id}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default CollegeDetail;