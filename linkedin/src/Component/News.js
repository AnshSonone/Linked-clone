import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const News = () => {
  return (
    <div className="hidden md:block overflow-y-hidden">
      <div className="my-2 py-3 px-2 bg-white w-[19rem] shadow-sm border-[1px] border-gray-200 h-fit rounded-md">
        <div className="hidden md:flex items-center justify-between">
          <h2>Linkedin News</h2>
          <InfoIcon />
        </div>
        <div className="my-3 mx-2 cursor-pointer">
          <div className="my-2 hover:bg-gray-200">
            <li className="text-[13px] font-bold  flex-nowrap list-disc">
              IT firm Ahead to hire 750 people
            </li>
            <p className="text-xs text-gray-500 mx-4">
              2d ago{" "}
              <span className="list-disc text-xs text-gray-500">
                10,430 readers
              </span>
            </p>
          </div>
          <div className="my-2 cursor-pointer hover:bg-gray-200">
            <li className="text-[13px] font-bold  flex-nowrap list-disc">
              More women enter IT workforce
            </li>
            <p className="text-xs text-gray-500 mx-4">
              4d ago{" "}
              <span className="list-disc text-xs text-gray-500">
                3,594 readers
              </span>
            </p>
          </div>
          <div className="my-2 cursor-pointer hover:bg-gray-200">
            <li className="text-[13px] font-bold  flex-nowrap list-disc">
              Agilitas Sports raises 400 crore
            </li>
            <p className="text-xs text-gray-500 mx-4">
              4d ago{" "}
              <span className="list-disc text-xs text-gray-500">
                8,216 readers
              </span>
            </p>
          </div>
          <div className="my-2 cursor-pointer hover:bg-gray-200">
            <li className="text-[13px] font-bold  flex-nowrap list-disc">
              Cricket broadcast gets tech savvy
            </li>
            <p className="text-xs text-gray-500 mx-4">
              3d ago{" "}
              <span className="list-disc text-xs text-gray-500">
                2,806 readers
              </span>
            </p>
          </div>
          <div className="my-2 cursor-pointer hover:bg-gray-200">
            <li className="text-[13px] font-bold  flex-nowrap list-disc">
              Discussing mental health with peers
            </li>
            <p className="text-xs text-gray-500 mx-4">
              4d ago{" "}
              <span className="list-disc text-xs text-gray-500">
                350 readers
              </span>
            </p>
          </div>
        </div>

        {/* ==============
        Show part
        ================ */}
        <div className="hidden md:flex items-center mx-5 py-1 px-1 hover:bg-gray-200 w-fit rounded-md cursor-pointer">
          <p className="text-sm text-gray-500 font-bold">Show more</p>
          <ExpandMoreIcon className="text-gray-500" />
        </div>
      </div>

      <div className="shadow-sm border-[1px] border-gray-200 rounded-[8px]">
        <img
          src={"https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"}
          alt="lInkedin"
        />
      </div>
      <div className="my-3">
        <div className="space-x-3 text-center">
          <span className="text-xs text-gray-600 cursor-pointer">About</span>
          <span className="text-xs text-gray-600 cursor-pointer">Accessibility</span>
          <span className="text-xs text-gray-600 cursor-pointer">Help Center</span>
        </div>
        <div className="space-x-3 text-center">
          <span className="text-xs text-gray-600 cursor-pointer">Privacy & Terms</span>
          <span className="text-xs text-gray-600 cursor-pointer">Ad Choices</span>
        </div>
        <div className="space-x-3 text-center">
          <span className="text-xs text-gray-600 cursor-pointer">Advertising</span>
          <span className="text-xs text-gray-600 cursor-pointer">Bussines Services</span>
        </div>
        <div className="space-x-3 text-center">
          <span className="text-xs text-gray-600 cursor-pointer">Get the linkedin app</span>
          <span className="text-xs text-gray-600 cursor-pointer">more</span>
        </div>
        <div className="flex items-center justify-center mt-3">
          <img
            className="h-[25px] bg-[#f3f3ef]"
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt=""
          />
          <span className="text-xs text-gray-600 ml-2">
            LinkedIn Corporation © 2023
          </span>
        </div>
      </div>
    </div>
  );
};

export default News;
