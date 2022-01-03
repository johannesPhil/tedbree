import React from "react";

const JobList = ({ job }) => {
  const resolveDate = (date) => {
    let newDate = new Date(date);
    return newDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
  };
  return (
    <div className="w-full flex justify-between shadow-md py-3 px-4 my-3 rounded-lg bg-white text-gray-500 items-center ">
      <div className="w-1/4 title">
        <span className="inline-block w-3 h-3 mr-2 rounded-full bg-jb-red"></span>
        {job.title}{" "}
      </div>
      <div className="w-1/4 title"> {resolveDate(job.created_at)} </div>
      {job.applicants ? (
        <div className="w-1/4 title"> {job.applicants} </div>
      ) : (
        <div className="w-1/4 title"> N/A </div>
      )}
      <div className="w-1/4 flex justify-center">
        <button className=" w-fit px-6 py-1  hover:bg-jb-red hover:text-white text-lg rounded-md duration-300">
          Edit
        </button>
      </div>
      <div className="w-1/4 flex justify-center">
        <button className=" w-fit px-3 py-1 hover:border hover:border-jb-blue-light hover:text-jb-blue-light text-lg rounded-md duration-300">
          Delete
        </button>
      </div>
    </div>
  );
};

export default JobList;
