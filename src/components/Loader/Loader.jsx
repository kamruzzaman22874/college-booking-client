import loader from "../../../public/loader.json";
import Lottie from "lottie-react";
const Loader = () => {
    return (
        <div className="w-[20%] h-[20%] mx-auto my-20">
            <Lottie animationData={loader} loop={true} />
        </div>
    );
};

export default Loader;