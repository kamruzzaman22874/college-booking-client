import { Link } from "react-router-dom";

const Addmissions = ({ add }) => {
    const {_id,  name, image } = add;
    return (
        <div className="card  bg-base-100 shadow-xl my-4">
            <img
                className="w-full h-48 object-cover object-center rounded-lg"
                src={image}
                alt="College"
            />
            <div className="card-body">
                <button>
                    <Link to={`/addmission/${_id}`}><h2 className="card-title">{name}</h2></Link>
                </button>
                {/* <p>{admissionDates}</p> */}
                {/* <div className="card-actions justify-end">
                    <button className="bg-[#79dd80] px-4 py-2 rounded-full text-white">Addmission</button>
                </div> */}
            </div>
        </div>
    );
};

export default Addmissions;