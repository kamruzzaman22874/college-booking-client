import loader from "../../../public/loader.json";
import Lottie from "lottie-react";
const Loader = () => {
    return (
        <div>
            <Lottie animationData={loader} loop={true} />
        </div>
    );
};

export default Loader;