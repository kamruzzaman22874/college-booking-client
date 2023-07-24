import {Link, useLoaderData } from "react-router-dom";

const Profile = () => {
    const profiles = useLoaderData();
    console.log(profiles);
    return (
        <div className="my-20 md:px-20 grid md:grid-cols-3 gap-6">
            {
                profiles.map(profile => <>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="">
                            <div>
                                <div className="card-body">
                                    <figure><img className="" src={profile.image} alt="college" /></figure>
                                    <p>Subject: {profile.subject}</p>
                                    <p>Name: {profile.name}</p>
                                    <p>Email: {profile.email}</p>
                                    <p>Date of Birth: {profile.dateOfBirth}</p>
                                    <p>Phone Number: {profile.phoneNumber}</p>
                                </div>
                                <Link to={`/update/${profile._id}`} className="flex justify-center p-2">
                                        <button className="bg-green-400 px-4 py-2 w-full rounded-full text-white text-lg">Edit</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </>)
            }
        </div>
    );
};

export default Profile;
// onSubmit = { handleFeedback }