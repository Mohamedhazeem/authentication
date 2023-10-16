import { BsPersonCircle } from "react-icons/bs";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { Alert, AlertType } from "./Alert";
import { AlertEnum } from "./alertEnum";

export const LogIn = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [res, setRes] = useState<AlertType>({
    isExist: AlertEnum.none,
    msg: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`email: ${inputValue.email}, password: ${inputValue.password}`);
    const options = {
      headers: { "content-type": "application/json" },
    };
    axios
      .get(
        `http://localhost:3000/login/${inputValue.email}/${inputValue.password}`,
        options
      )
      .then((response: AxiosResponse<AlertType>) => {
        setRes(response.data);
        console.log("response");
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
            value={inputValue.email}
            onChange={(e) =>
              setInputValue({ ...inputValue, email: e.target.value })
            }
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="*-*-"
            value={inputValue.password}
            onChange={(e) =>
              setInputValue({ ...inputValue, password: e.target.value })
            }
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
