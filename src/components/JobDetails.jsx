import React from "react";

import { useQuery } from "react-query";

import * as apiReq from "../ApiRequests";
import location from "../images/svg/location.svg";

const JobDetails = ({ jobId }) => {
  const {
    data: detail,
    isError,
    error,
  } = useQuery(["details", jobId], () => apiReq.details(jobId),{keepPreviousData:true});

  if (isError) {
    console.log(error);
  }

  if (detail) {
    console.log(detail.title);
  }

  return (
    <>
      {detail && (
        <div className="w-full description h-auto bg-white shadow-jb-card shadow-lg rounded-lg">
        <div className=" pb-3 border-b border-jb-red px-9 py-11">
            <div className="title w-full">
              <p className=" text-2xl text-jb-blue"> {detail.title}</p>
            </div>
            <div className="my-3">
              <img src={location} alt="location" className="w-4 h-4 inline-block mr-3" />
              <span>{detail.location}</span>
            </div>
            <button className="bg-jb-blue text-white py-3 px-9 my-4  rounded-md text-lg">Apply via FindJob</button>
        </div>
        </div>
      )}
    </>
  );
};

export default JobDetails;
