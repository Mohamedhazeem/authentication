import { BsPersonCircle } from "react-icons/bs";
type check = {
  isShow: boolean;
};
export const SignUp = (isShow: check) => {
  console.log(isShow);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-200 w-80 h-[100%] rounded-xl flex flex-col justify-center items-center gap-2 ">
        <BsPersonCircle size={50} />
        <form
          className="flex flex-col justify-center items-start"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" placeholder="xyz@gg.com" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="*-*-" required />

          <button type="submit">Create</button>
        </form>
      </div>
    </>
  );
};
