import { BsPersonCircle } from "react-icons/bs";
export const Home = () => {
  return (
    <>
      <div className="bg-slate-300 h-10 pl-10 flex flex-row items-center">
        <p className="text-slate-600 text-3xl font-bold ">
          MERN AUTHENTICATION
        </p>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-100 w-80 h-[40%] rounded-xl flex flex-col justify-center items-center gap-4 ">
        <BsPersonCircle size={50} />
        <div className="flex flex-col justify-center items-center gap-10">
          <button className="bg-green-400 w-48 text-lg font-semibold rounded-xl">
            CREATE AN ACCOUNT
          </button>
          <div className="flex flex-col justify-center items-center gap-2">
            <p>Already have an account?</p>
            <button className="bg-blue-400 w-24 text-lg font-semibold rounded-xl">
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
