const Addmissions = ({ add }) => {
    const { name, admissionDates } = add;
    return (
        <div className="card card-side bg-base-100 shadow-xl my-4">
         
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{admissionDates}</p>
                <div className="card-actions justify-end">
                    <button className="bg-[#79dd80] px-4 py-2 rounded-full text-white">Addmission</button>
                </div>
            </div>
        </div>
    );
};

export default Addmissions;