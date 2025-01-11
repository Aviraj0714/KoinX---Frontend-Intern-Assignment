import React, { useState, useEffect } from "react";
import { IoMdInformationCircle } from "react-icons/io";

function PerformanceSection({ data = {} }) {
  const {
    todaysLow = "N/A",
    todaysHigh = "N/A",
    price = "N/A",
    volume = "N/A",
    marketCap = "N/A",
    allTimeHigh = { value: "N/A", percentage: "N/A", date: "N/A" },
    allTimeLow = { value: "N/A", percentage: "N/A", date: "N/A" },
  } = data;

  return (
    <div className="bg-white mt-5 rounded-lg lg:p-6 p-2 h-max">
      <div>
        <div className="text-2xl font-semibold text-[#0F1629]">Performance</div>
        <div className="py-4 mt-2">
          <div className="flex justify-between">
            <div className="text-start">
              <div className="text-sm text-[#44475B] font-normal p-1">
                Today’s Low
              </div>
              <div className="text-[#44475B] text-lg font-medium p-1">
                {todaysLow}
              </div>
            </div>
            <div className="w-[500px] h-2 mx-4">
              <div className="bg-gradient-to-r from-red-500 via-orange-500 to-green-500 h-full rounded-2xl mt-7"></div>
            </div>
            <div className="text-end">
              <div className="text-sm text-[#44475B] font-normal p-1">
                Today’s High
              </div>
              <div className="text-[#44475B] text-lg font-medium p-1">
                {todaysHigh}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center">
            <div className="text-[#44475B] font-semibold text-xl">
              Fundamentals
            </div>
            <div>
              <IoMdInformationCircle className="text-[#ABB9BF] text-lg ml-2" />
            </div>
          </div>
          <div className="lg:flex mb-8">
            <div className="lg:w-1/2 lg:mr-10 mt-3">
              <div className="flex justify-between py-5 border-b-2 border-[#D3E0E6]">
                <div className="text-[#768396] text-sm font-semibold">
                  Bitcoin Price
                </div>
                <div className="text-[#111827] text-sm font-semibold mr-4">
                  {price}
                </div>
              </div>
              <div className="flex justify-between py-5 border-b-2 border-[#D3E0E6]">
                <div className="text-[#768396] text-sm font-semibold">
                  Trading Volume
                </div>
                <div className="text-[#111827] text-sm font-semibold mr-4">
                  {volume}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:ml-10 lg:mt-3">
              <div className="flex justify-between py-5 border-b-2 border-[#D3E0E6]">
                <div className="text-[#768396] text-sm font-semibold">
                  Market Cap
                </div>
                <div className="text-[#111827] text-sm font-semibold mr-4">
                  {marketCap}
                </div>
              </div>
              <div className="flex justify-between py-3 border-b-2 border-[#D3E0E6] items-center">
                <div className="text-[#768396] text-sm font-semibold">
                  All-Time High
                </div>
                <div className="text-[#111827] text-sm font-semibold mr-4">
                  <div className="text-end">
                    {allTimeHigh.value}{" "}
                    <span className="text-red-500">{allTimeHigh.percentage}</span>
                  </div>
                  <div className="text-xs font-normal">{allTimeHigh.date}</div>
                </div>
              </div>
              <div className="flex justify-between py-3 border-b-2 border-[#D3E0E6] items-center">
                <div className="text-[#768396] text-sm font-semibold">
                  All-Time Low
                </div>
                <div className="text-[#111827] text-sm font-semibold mr-4">
                  <div className="text-end">
                    {allTimeLow.value}{" "}
                    <span className="text-green-500">{allTimeLow.percentage}</span>
                  </div>
                  <div className="text-xs font-normal">{allTimeLow.date}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ParentComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      
      const fakeData = {
        todaysLow: "$46,930.22",
        todaysHigh: "$49,343.83",
        price: "$16,815.46",
        volume: "$23,249,202,782",
        marketCap: "$323,507,290,047",
        allTimeHigh: {
          value: "$69,044.77",
          percentage: "-75.6%",
          date: "Nov 10, 2021 (about 1 year)",
        },
        allTimeLow: {
          value: "$67.81",
          percentage: "24729.1%",
          date: "Jul 06, 2013 (over 9 years)",
        },
      };
      setTimeout(() => setData(fakeData), 1000); 
    }
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return <PerformanceSection data={data} />;
}

export default ParentComponent;
