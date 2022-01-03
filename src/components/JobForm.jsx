import React from "react";

const JobForm = ({ modal, showJobForm }) => {
  if (modal) {
    console.log(modal);
  }
  const closeForm = () => {
    showJobForm();
  };

  return (
    <div className="absolute w-full min-h-screen bg-opacity-60 bg-black z-50 py-44">
      <div className=" max-w-2xl mx-auto my-6 p-5 bodyColor">
        <div className="flex justify-end">
          <span onClick={closeForm} className="text-bg-blue text-2xl">
            &#x2715;
          </span>
        </div>
        <div className="heading">
          <h1 className="text-2xl text-jb-blue-light">New Job</h1>
          <p className="mt-6 text-md text-gray-700">
            Kindly provide the required information to get matched with suitable
            candidates
          </p>
        </div>
        <form action="" className="mt-8 w-10/12 mx-auto">
          <div className="w-full formComponent">
            <label htmlFor="title" className="newJobLabel">
              Job Title
            </label>
            <input type="text" name="title" id="" className="newJobInput" />
          </div>
          <div className="w-full formComponent">
            <label htmlFor="company" className="newJobLabel">
              Company Name
            </label>
            <input type="text" name="company" id="" className="newJobInput" />
          </div>
          <div className="w-full formComponent">
            <label htmlFor="location" className="newJobLabel">
              Location
            </label>
            <input type="text" name="location" id="" className="newJobInput" />
          </div>
          <div className="w-full formComponent">
            <label htmlFor="type" className="newJobLabel">
              What type of employement is it?
            </label>
            <input type="text" name="type" id="" className="newJobInput" />
          </div>
          <div className="w-full formComponent">
            <label htmlFor="salary" className="newJobLabel">
              Salary Range
            </label>
            <input type="text" name="salary" id="" className="newJobInput" />
          </div>
          <div className="w-full formComponent">
            <label htmlFor="deadline" className="newJobLabel">
              Submission deadline
            </label>
            <input type="text" name="deadline" id="" className="newJobInput" />
          </div>
          <div className="w-full formComponent">
            <label htmlFor="sector" className="newJobLabel">
              What Sector is this job categorized under?
            </label>
            <select name="sector" id="">
              <option value="Select "></option>
            </select>
          </div>
          <div className=" mt-8">
            <button className="w-full bg-jb-blue text-center text-white py-4">Submit Form</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
