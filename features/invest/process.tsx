import Process from "@/components/process";

const data = [
  {
    _id: "01",
    title: "Choose Your Investment",
    body: "Explore our diverse range of energy investment options.",
  },
  {
    _id: "02",
    title: "Tokenize Your Investment",
    body: "Convert your investment into secure and tradable tokens.",
  },
  {
    _id: "03",
    title: "Track Your Portfolio",
    body: "Monitor your investments in real-time through our user-friendly dashboard.",
  },
];

const InvestProcess = () => {
  return <Process data={data} />;
};

export default InvestProcess;
