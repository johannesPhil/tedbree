import React from "react";

import location from "../images/svg/location.svg";

const JobCard = ({ job, jobId, setJobId }) => {
  return (
    <div
      className={` w-[350px] p-8 mb-12 rounded-[10px] ${
        jobId === job.id ? "bg-jb-blue text-white" : "bg-white"
      }  shadow-jb-card shadow-lg`}
    >
      <div className="job-heading flex justify-between">
        <div className="w-full flex justify-between min-h-[100px] flex-wrap">
          <p className="job-title text-xl my-3 whitespace-nowrap">
            {job.title}
          </p>
          <p className="salary whitespace-nowrap my-3"> {job.salary} </p>
        </div>
      </div>
      <div className="flex items-center gap-2  my-3">
        <img src={location} alt="location icon" className=" inline w-5 h-5" />
        <span>{job.location}</span>
      </div>
      <div className="description min-h-[40px] my-3 text-sm">
        <p>{job.description}</p>
      </div>
      <div className="w-full flex flex-row-reverse">
        <button
          className="outline-none px-4 py-2 bg-jb-red text-white hover:bg-white hover:text-jb-red rounded-xl"
          onClick={() => setJobId(job.id)}
        >
          See more
        </button>
      </div>
    </div>
  );
};

export default JobCard;
