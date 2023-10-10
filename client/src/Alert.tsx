import { AiOutlineCloseCircle } from "react-icons/ai";
import { AlertEnum } from "./alertEnum";
import { useState } from "react";

export type AlertType = {
  isExist: AlertEnum;
  msg: string;
};

export const Alert = ({ isExist, msg }: AlertType) => {
  const [isShow, setIsShow] = useState<boolean>(true);

  const handleShow = () => {
    setIsShow(true);
    isExist = AlertEnum.none;
  };

  return (
    <>
      {isExist == AlertEnum.signed && isShow && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <p className="block sm:inline">{msg}</p>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <button
              onClick={() => {
                console.log("click");
                setIsShow(false);
                setTimeout(handleShow, 1000);
              }}
            >
              {""}
              <AiOutlineCloseCircle size={30} />
            </button>
          </span>
        </div>
      )}
      {isExist == AlertEnum.signUp && isShow && (
        <div
          className="bg-red-100 border border-red-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <p className="block sm:inline">{msg}</p>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <button
              onClick={() => {
                console.log("click");
                setIsShow(false);
              }}
            >
              {""}
              <AiOutlineCloseCircle size={30} />
            </button>
          </span>
        </div>
      )}
      {isExist == AlertEnum.none && <div></div>}
    </>
  );
};