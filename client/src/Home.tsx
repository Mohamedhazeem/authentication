//import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
//import { SignUp } from "./SignUp";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  //const [isShowSignUp, setIsShowSignUp] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-100 w-80 h-[40%] rounded-xl flex flex-col justify-center items-center gap-4 ">
        <BsPersonCircle size={50} />
        <div className="flex flex-col justify-center items-center gap-10">
          <button
            className="bg-green-400 w-48 text-lg font-semibold rounded-xl"
            onClick={() => navigate("/signup")}
          >
            CREATE AN ACCOUNT
          </button>
          <div className="flex flex-col justify-center items-center gap-2">
            <p>Already have an account?</p>
            <button
              className="bg-blue-400 w-24 text-lg font-semibold rounded-xl"
              onClick={() => navigate("/login")}
            >
              SIGN IN
            </button>
          </div>
        </div>
      </div>

      {/* {isShowSignUp && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-100 w-80 h-[40%] rounded-xl ">
          <SignUp isShow={isShowSignUp} />
        </div>
      )} */}
    </>
  );
};
