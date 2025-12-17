import React, { useEffect } from "react";
import SalonCard from "./SalonCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchSalons } from "../../../Redux/Salon/action";

const SalonList = ({salons}) => {

  return (
    <div className="flex gap-6 flex-wrap ">
      {salons?.map((item) => (
        <SalonCard key={item.id} salon={item}/>
      ))}
    </div>
  );
};

export default SalonList;
