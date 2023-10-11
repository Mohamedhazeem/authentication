import { BsPersonCircle } from "react-icons/bs";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { Alert, AlertType } from "./Alert";
import { AlertEnum } from "./alertEnum";

export const LogIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [res, setRes] = useState<AlertType>({
    isExist: AlertEnum.none,
    msg: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const options = {
      headers: { "content-type": "application/json" },
    };
    axios
      .post(
        " http://localhost:3000/login",
        {
          email: email,
          password: password,
        },
        options
      )
      .then((response: AxiosResponse<AlertType>) => {
        setRes(response.data);
        console.log(response);
      })
      .catch(async (error: Error) => {
        const errorMessage = await error.message;
        console.log(errorMessage);
      });
  };
  return (
    <>
      <Alert key={crypto.randomUUID()} isExist={res!.isExist} msg={res!.msg} />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-200 w-80 h-[40%] rounded-xl flex flex-col justify-center items-center gap-2 ">
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
          <div className="flex flex-col justify-center items-center w-full mt-5">
            <button
              type="submit"
              className="bg-blue-600 font-semibold text-xl w-[50%] rounded-lg"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
