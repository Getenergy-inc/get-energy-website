"use client";
import Image from "next/image";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { DASHBOARD_URL } from "@/constants/variables";
import { publicApi } from "@/lib/utils/configs/axiosInstance";

interface Props {
  text: string;
  actionText?: string;
  actionType?: "waitlist" | "started";
  action?(): void;
}

const BeforeFooterAction: FC<Props> = ({ text, actionText, actionType }) => {
  const renderActionButton = () => {
    switch (actionType) {
      case "waitlist":
        return (
          <AlertDialog>
            <AlertDialogTrigger>
              <button className="flex mx-auto w-fit items-center gap-2 bg-primaryBlue rounded-lg px-6 py-3 text-white">
                <span>{actionText ?? "Get Started"}</span>
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  <div className="flex items-center justify-between">
                    <p className="font-extrabold">Join Waitlist</p>
                    <AlertDialogCancel>
                      <XIcon />
                    </AlertDialogCancel>
                  </div>
                </AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogDescription>
                <JoinForm />
              </AlertDialogDescription>
            </AlertDialogContent>
          </AlertDialog>
        );
      default:
        return (
          <button
            className="flex mx-auto w-fit items-center gap-2 bg-primaryBlue rounded-lg px-6 py-3 text-white"
            onClick={() =>
              window.open(`${DASHBOARD_URL}/dashboard/get-energy`, "")
            }
          >
            <span>{actionText ?? "Get Started"}</span>
          </button>
        );
    }
  };

  return (
    <div className="container mx-auto py-16 rounded-xl bg-[#003B6D33] relative text-center justify-center items-center flex">
      <div className="absolute top-0 left-0 w-full h-full -z-[1]">
        <Image
          src={"/images/bg/back-circle.png"}
          alt="circle thing"
          width={900}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-10">
        <p className="font-bold md:text-4xl sm:text-3xl text-xl max-w-[80%] mx-auto text-center">
          {text}
        </p>

        <div>{renderActionButton()}</div>
      </div>
    </div>
  );
};

export const JoinForm = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
  });

  const [done, setDone] = useState(false);
  const updateInput = (e: ChangeEvent<HTMLInputElement>) =>
    setInputs({ ...inputs, [e.target.name]: [e.target.value] });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputs.fullName || !inputs.email || !inputs.mobileNumber) {
      return;
    }

    try {
      const response = await publicApi.post("/waitlist", {
        ...inputs,
        type: "ecommerce",
      });

      setDone(true);
      const { data } = response;
    } catch {}
  };

  return (
    <>
      {!done ? (
        <form onSubmit={onSubmit}>
          <div className="grid md:grid-cols-2 text-black gap-4">
            <div className="space-y-1">
              <label htmlFor="fullName" className="font-bold">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                className="w-full p-3 [border-width:1px] border-zinc-400 rounded-lg"
                placeholder="Enter Full Name"
                value={inputs.fullName}
                onChange={(e) => updateInput(e)}
                required
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="font-bold">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="w-full p-3 [border-width:1px] border-zinc-400 rounded-lg"
                placeholder="Enter Email Address"
                value={inputs.email}
                onChange={(e) => updateInput(e)}
                required
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="phone" className="font-bold">
                Mobile Number
              </label>
              <input
                type="text"
                name="mobileNumber"
                className="w-full p-3 [border-width:1px] border-zinc-400 rounded-lg"
                placeholder="Enter Mobile Number"
                value={inputs.mobileNumber}
                onChange={(e) => updateInput(e)}
                required
              />
            </div>
          </div>

          <div className="w-1/2 mx-auto mt-4">
            <button
              type="submit"
              className="w-full mx-auto bg-primaryBlue text-white py-3 font-semibold rounded-xl"
            >
              Proceed
            </button>
          </div>
        </form>
      ) : (
        <div className="flex items-center justify-center py-4">
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 31.125C25.2487 31.125 31.125 25.2487 31.125 18C31.125 10.7513 25.2487 4.875 18 4.875C10.7513 4.875 4.875 10.7513 4.875 18C4.875 25.2487 10.7513 31.125 18 31.125ZM23.36 16.1588C23.9539 15.6148 23.9944 14.6923 23.4505 14.0984C22.9065 13.5044 21.984 13.4639 21.39 14.0079L16.0058 18.9391L14.61 17.6608C14.016 17.1168 13.0935 17.1573 12.5496 17.7513C12.0056 18.3452 12.0461 19.2677 12.64 19.8117L15.0208 21.9921C15.5782 22.5026 16.4333 22.5026 16.9907 21.9921L23.36 16.1588Z"
                fill="#003B6D"
              />
            </svg>

            <p className="text-center text-green-500 font-bold mt-5">
              Successfully added
            </p>
          </div>
        </div>
      )}
    </>
  );
};

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="cursor-pointer"
  >
    <path
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
      fill="#DFDFE6"
    />
    <path
      d="M9.16937 15.5794C8.97937 15.5794 8.78938 15.5094 8.63938 15.3594C8.34938 15.0694 8.34938 14.5894 8.63938 14.2994L14.2994 8.63938C14.5894 8.34938 15.0694 8.34938 15.3594 8.63938C15.6494 8.92937 15.6494 9.40937 15.3594 9.69937L9.69937 15.3594C9.55937 15.5094 9.35937 15.5794 9.16937 15.5794Z"
      fill="#23262F"
    />
    <path
      d="M14.8294 15.5794C14.6394 15.5794 14.4494 15.5094 14.2994 15.3594L8.63938 9.69937C8.34938 9.40937 8.34938 8.92937 8.63938 8.63938C8.92937 8.34938 9.40937 8.34938 9.69937 8.63938L15.3594 14.2994C15.6494 14.5894 15.6494 15.0694 15.3594 15.3594C15.2094 15.5094 15.0194 15.5794 14.8294 15.5794Z"
      fill="#23262F"
    />
  </svg>
);

export default BeforeFooterAction;
