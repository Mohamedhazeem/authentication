import { BsPersonCircle } from "react-icons/bs";
import axios from "axios";
import { useState } from "react";
type check = {
  isShow: boolean;
};
export const SignUp = (isShow: check) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const options = {
      headers: { "content-type": "application/json" },
    };
    axios
      .post(
        " http://localhost:3000/signup",
        {
          email: email,
          password: password,
        },
        options
      )
      .then((response) => {
        console.log(response);
      })
      .catch(async (error: Error) => {
        const errorMessage = await error.message;
        console.log(errorMessage);
        const data = { msg: `User with email ${email} already exists` };
        console.log(data);
      });
  };
  return (
    <>
      {isShow && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-200 w-80 h-[100%] rounded-xl flex flex-col justify-center items-center gap-2 ">
          <BsPersonCircle size={50} />
          <form
            className="flex flex-col justify-center items-start"
            onSubmit={handleSubmit}
          >
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              placeholder="xyz@gg.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="*-*-"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Create</button>
          </form>
        </div>
      )}
    </>
  );
};
