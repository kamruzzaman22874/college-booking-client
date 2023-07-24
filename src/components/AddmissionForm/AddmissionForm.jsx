import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const imageHosting = import.meta.env.VITE_image_upload_token;


const AddmissionForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const imageUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHosting}`;
    const onSubmit = (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(imageUrl, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imageURL = imgResponse.data.display_url;
                    const { name, subject, email, phoneNumber, address, dateOfBirth } = data;

                    const addmissionInfo = {
                        name,
                        subject,
                        email,
                        phoneNumber,
                        address,
                        dateOfBirth,
                        image:imageURL
                    }
                    console.log(addmissionInfo);
                    fetch('http://localhost:5000/addmissions', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(addmissionInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data)
                            if (data.insertedId) {
                                reset();
                                Swal.fire({
                                    title: 'Success!',
                                    text: 'Your Application Was Successfully Applied',
                                    icon: 'success',
                                    confirmButtonText: 'Okay'
                                })
                            }
                        })
                }
            })
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='container my-24 flex flex-col mx-auto ng-untouched ng-pristine ng-valid bg-[#116A7B] rounded'>
            <fieldset className='grid grid-cols-4 gap-6 p-6 rounded-md shadow-lg '>
                <div className='grid grid-cols-6 gap-4 col-span-full lg:col-span-3'>
                    <div className='col-span-full sm:col-span-3'>
                        <label className='text-md text-white'>Name</label>
                        <input
                            placeholder='name'
                            {...register('name')}
                            className='w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
                        />
                    </div>
                    <div className='col-span-full sm:col-span-3'>
                        <label className='text-md text-white'>Subject</label>
                        <input
                            placeholder='subject'
                            {...register('subject')}
                            className='w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
                        />
                    </div>
                    <div className='col-span-full sm:col-span-3'>
                        <label className='text-md text-white'>Email</label>
                        <input
                            
                            placeholder='email'
                            {...register('email')}
                            className='w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
                        />
                    </div>
                    <div className='col-span-full sm:col-span-3'>
                        <label className='text-md text-white'>Phone Number</label>
                        <input
                    
                            {...register('phoneNumber')}
                            placeholder='phone Number'
                            className='w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
                        />
                    </div>
                    <div className='col-span-full sm:col-span-3'>
                        <label className='text-md text-white'>Address</label>
                        <input
                            type='text'
                            {...register('address')}
                            placeholder='address'
                            className='w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
                        />
                    </div>
                    <div className='col-span-full sm:col-span-3'>
                        <label className='text-md text-white'>Date Of Birth</label>
                        <input
                            type='date'
                            {...register('dateOfBirth')}
                            placeholder='dateOfBirth'
                            className='w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
                        />
                    </div>

                            <label className='text-md text-white'>Image</label>
                    <div className='col-span-full flex items-center gap-4'>
                      <div className="w-[50%]">
                            <input
                                type='file'
                                {...register('image', { required: true })}
                                className='w-full p-2 border-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
                            />
                      </div>
                        <div>
                            <input
                                className='hover:bg-[#ECE5C7] cursor-pointer px-4 py-3 text-white hover:text-black rounded border-b-4 hover:border-b-[#090580] font-semibold bg-[#79dd80]'
                                type='submit'
                                value='Submit'
                            />
                        </div>
                    </div>

                    
                </div>
            </fieldset>
           
        </form>
    );
};

export default AddmissionForm;