import {
         LiaShippingFastSolid,
         LiaMoneyBillWaveSolid,
         LiaGiftSolid,
     } from "react-icons/lia";

import { FiPhoneCall } from "react-icons/fi";
import FeatureCard from "./FeatureCard";

const Data =[
    {
        title: "Free Shipping",
        icon: <LiaShippingFastSolid />,
    },
    {
        title: "Best Price Guarentee",
        icon: <LiaMoneyBillWaveSolid />,
    },
    {
        title: "Free Curbiside Pickup",
        icon: <LiaGiftSolid />,
    },
    {
        title: "Support 24/7",
        icon: <FiPhoneCall />,
    },
];
const Feature = () => {
  return (
    <div className="container ml-15 pt-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {Data.map((el) => (
                <FeatureCard key = {el.title} title={el.title} icon = {el.icon} />
            ))}
        </div>
      
    </div>
  );
};

export default Feature;


