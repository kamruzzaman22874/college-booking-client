import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/images/college-image1.jpg'
import img2 from '../../assets/images/college-image2.jpg'
import img3 from '../../assets/images/college-image3.jpg'
import img4 from '../../assets/images/college-image4.jpg'
const Banner = () => {
    return (
        <Carousel autoPlay={true} className="inset-0 bg-gradient-to-t w-full  from-black to-slate-600">
            <div className="bg-black bg-opacity-50 h-screen w-full">
                <img className="w-full bg-opacity-70 mix-blend-overlay" src={img1} />
                <p className="md:-mt-[40%] text-5xl text-white">Booking Seat Available</p>
            </div>
            <div className="bg-black bg-opacity-50 h-screen w-full">
                <img className="w-full bg-opacity-70 mix-blend-overlay" src={img2} />
                <p className="md:-mt-[40%] text-5xl text-white">Booking Seat Available</p>
            </div>
            <div className="bg-black bg-opacity-50 h-screen w-full">
                <img className="w-full bg-opacity-70 mix-blend-overlay" src={img3} />
                <p className="md:-mt-[40%] text-5xl text-white">Booking Seat Available</p>
            </div>
            <div className="bg-black bg-opacity-50 h-screen w-full">
                <img className="w-full bg-opacity-70 mix-blend-overlay" src={img4} />
                <p className="md:-mt-[40%] text-5xl text-white">Booking Seat Available</p>

            </div>
        </Carousel>
    );
};

export default Banner;