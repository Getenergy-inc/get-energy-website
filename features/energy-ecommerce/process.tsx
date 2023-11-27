"use client";
import Process from "@/components/process";

const data = [
  {
    _id: "01",
    title: "Explore Categories",
    body: "Dive into our diverse range of energy products.",
  },
  {
    _id: "02",
    title: "Connect with Manufacturer",
    body: "Learn about the creators behind the energy revolution.",
  },
  {
    _id: "03",
    title: "Shop Securely",
    body: "Experience a secure and seamless shopping journey",
  },
  {
    _id: "04",
    title: "Annual Energy Expo",
    body: "Don't miss our grand showcase of innovation and energy excellence!",
  },
];

const EnergyEcomProcess = () => {
  return <Process data={data} />;
};

export default EnergyEcomProcess;
