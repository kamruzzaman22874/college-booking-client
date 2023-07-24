
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const [newUpdate, setNewUpdate] = useState()
   const updated = useLoaderData()
    const { _id, name, subject, email, dateOfBirth, phoneNumber } = updated;
   const handleUpdate = (e)=>{
       e.preventDefault();
       const form = e.target;
       const subject = form.subject.value;
       const name = form.name.value;
       const email = form.email.value;
       const dateOfBirth = form.dateOfBirth.value;
       const phoneNumber = form.phoneNumber.value;
       const allInfo = {
            subject:subject,
            name: name,
            email:email,
            dateOfBirth:dateOfBirth,
           phoneNumber:phoneNumber
       }

       fetch(`http://localhost:5000/update/${_id}`,{
        method: "PATCH",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(allInfo)
       })
       .then(res => res.json())
       .then(data => {
           if (data.modifiedCount > 0){
            Swal.fire({
                position: 'top-middle',
                icon: 'success',
                title: 'Updated Successfully',
                showConfirmButton: false,
                timer: 1500
            })
        }
           console.log(data);
       })
       
   }

   
    return (
        <div className="container mx-auto my-24">
            <form onSubmit={handleUpdate} className="w-full max-w-lg mx-auto">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                        Subject
                    </label>
                    <input
                        type="text"
                        defaultValue={subject}
                        id="subject"
                        name="subject"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        defaultValue={name}
                        type="text"
                        id="name"
                        name="name"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        defaultValue={email}
                        id="email"
                        name="email"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dateOfBirth">
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        defaultValue={phoneNumber}
                        id="phoneNumber"
                        name="phoneNumber"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Update;