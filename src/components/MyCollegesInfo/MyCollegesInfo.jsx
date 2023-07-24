import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useState } from 'react';
const MyCollegesInfo = ({ college }) => {
    const [rating, setRating] = useState(0);
    const { name, email, image, subject, dateOfBirth, phoneNumber } = college;

    const handleFeedback =(e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.review.value;
        const reviewItem = {
            review: name,
            rating,
            image,
            name,
        }

        fetch("http://localhost:5000/review",{
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(reviewItem)
        })
    }

    return (

        <div className="card  bg-base-100 shadow-xl">
            <div className="grid lg:grid-cols-2">
                <div>
                    <div className="card-body">
                        <figure><img src={image} alt="Shoes" /></figure>
                        <p>Subject: {subject}</p>
                        <p>Name: {name}</p>
                        <p>Email: {email}</p>
                        <p>Date of Birth: {dateOfBirth}</p>
                        <p>Phone Number: {phoneNumber}</p>
                    </div>
                </div>
                <div>
                    <div className='mt-20 w-[40%] mx-auto'>
                        <Rating
                            style={{ maxWidth: 220 }}
                            value={rating}
                            onChange={setRating}
                            isRequired
                        />
                    </div>
                    <form className='flex justify-center' onSubmit={handleFeedback}>
                        <div className=''>
                            <textarea name='review' className="textarea  my-6 textarea-accent" placeholder="Bio"></textarea> <br />
                            <input className='bg-[#79dd80] cursor-pointer text-white px-8 py-3 rounded-full' type="submit" value="submit" />
                        </div>
                    </form>
                
                </div>
            </div>
        </div>
    );
};

export default MyCollegesInfo;