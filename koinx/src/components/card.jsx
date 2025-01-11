import React from "react";
import { FaArrowRight } from "react-icons/fa";
import promoimg from "../assets/promoimg.png";

function CardsPromo() {
  return (
    <div className="mt-4 bg-[#0052FE] text-white lg:h-[530px] rounded-2xl px-10 py-8 lg:ml-4 text-center">
      <div>
        <div className="text-2xl px-12 font-semibold">
          Get Started with KoinX for FREE
        </div>
        <div className="text-sm mt-4 leading-relaxed">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <img
          src={promoimg}
          alt="Promotional Visual"
          className="w-[178px] h-[166.22px]"
        />
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center mt-8 bg-white text-[#0F1629] rounded-xl py-3 px-6 w-[237px] text-center cursor-pointer hover:shadow-lg transition-shadow">
          <button className="font-medium">
            Get Started for FREE
          </button>
          <div className="ml-4 mt-1">
            <FaArrowRight className="font-thin" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsPromo;
