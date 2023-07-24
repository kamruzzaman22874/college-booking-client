
import Lottie from "lottie-react";
import error from "../../../public/error.json"
const ErrorPage = () => {
    return (
        <div className="w-[20%] h-[20%] mx-auto my-20">
            <Lottie animationData={error} loop={true} />
        </div>
    );
};

export default ErrorPage;