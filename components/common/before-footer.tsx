"use client";
import Image from "next/image";
import { FC } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { DASHBOARD_URL } from "@/constants/variables";

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
            onClick={() => window.open(`${DASHBOARD_URL}/dashboard/get-energy`, "")}
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
        <p className="font-bold text-4xl max-w-[80%] mx-auto text-center ">{text}</p>

        <div>{renderActionButton()}</div>
      </div>
    </div>
  );
};

export const JoinForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-2 text-black gap-4">
        <div className="space-y-1">
          <label htmlFor="fullName" className="font-bold">
            Full Name
          </label>
          <input
            type="text"
            className="w-full p-3 [border-width:1px] border-zinc-400 rounded-lg"
            placeholder="Enter Full Name"
            required
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="font-bold">
            Email Address
          </label>
          <input
            type="email"
            className="w-full p-3 [border-width:1px] border-zinc-400 rounded-lg"
            placeholder="Enter Email Address"
            required
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="phone" className="font-bold">
            Mobile Number
          </label>
          <input
            type="text"
            className="w-full p-3 [border-width:1px] border-zinc-400 rounded-lg"
            placeholder="Enter Mobile Number"
            required
          />
        </div>
      </div>

      <div className="w-1/2 mx-auto mt-4">
        <button className="w-full mx-auto bg-primaryBlue text-white py-3 font-semibold rounded-xl">Proceed</button>
      </div>
    </form>
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
