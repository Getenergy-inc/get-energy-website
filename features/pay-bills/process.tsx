import Process from "@/components/process";

const data = [
  {
    _id: "01",
    title: "Select Your Service",
    body: "Choose from our extensive list of services.",
  },
  {
    _id: "02",
    title: "Enter Details",
    body: "Fill in the necessary information securely.",
  },
  {
    _id: "03",
    title: "Review & Confirm",
    body: "Double-check your details and proceed with confidence",
  },
  {
    _id: "04",
    title: "Payment",
    body: "Complete your transaction in a few clicks. It's that easy!",
  },
];

const BillsProcess = () => {
  return <Process data={data} />;
};

export default BillsProcess;
