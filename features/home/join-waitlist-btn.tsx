import { JoinForm } from "@/components/common/before-footer";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { XIcon } from "lucide-react";

const JoinWaitlistButton = () => (
  <AlertDialog>
    <AlertDialogTrigger>
      <button className="font-bold text-primaryBlue px-6 py-3 rounded-xl bg-primaryBlue/20">
        Join Wait List
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

export default JoinWaitlistButton;
