import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useQuery } from "react-query";

import search from "../images/svg/search.svg";
import filter from "../images/svg/filter.svg";
import * as apiQuery from "../ApiRequests";

import Header from "../components/Header";
import JobList from "../components/JobList";
import Pagination from "../components/Pagination";
import JobForm from "../components/JobForm";

const User = () => {
  const location = useLocation();
  const { avatar, email, name } = location.state.data;
  const [page, setPage] = useState(1);
  const [userJobs, setUserJobs] = useState();
  const [modal, setModal] = useState(false);

  const { data, isLoading, status } = useQuery(
    ["userJobs", page],
    () => apiQuery.getJobs(page, name),
    { keepPreviousData: true }
  );

  const showJobForm = () => {
    setModal(!modal);
  };

  useEffect(() => {
    if (status === "success") {
      setUserJobs(data.data);
      if (userJobs) {
        console.log(userJobs);
      }
    }
  }, [status, data, userJobs, page]);

  return (
    <div className="relative">
      {modal && <JobForm showJobForm={showJobForm} />}
      <Header />
      <main className="mt-12 px-12 pt-12">
        <div className="top w-full control flex justify-between">
          <form
            action=""
            className="w-2/5 p-2 bg-white shadow-lg flex justify-between items-center gap-5 md:gap-0 rounded-lg font-gilroyReg ease-in duration-300"
          >
            <div className="w-4/5 flex items-center px-3 ">
              <img src={search} alt="" className=" w-5 h-5 mr-3" />
              <input
                type="text"
                name="location"
                id=""
                className="w-full outline-none text-jb-text"
              />
            </div>
            <div className="form-control w-1/5">
              <button className="w-full px-3 py-2 bg-jb-red text-white text-base rounded-xl">
                Search
              </button>
            </div>
          </form>
          <div className="add shadow-lg rounded-xl overflow-hidden">
            <button
              onClick={() => showJobForm()}
              className="w-full h-full px-5 py-2 bg-jb-red text-white text-base"
            >
              &#43; Add New
            </button>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-between py-20">
          {userJobs ? (
            <>
              <div className="w-full flex justify-between shadow-md py-3 px-4 my-3 rounded-lg bg-jb-blue text-white items-center ">
                <div className="w-3/5 flex justify-between">
                  <div className="w-1/3 title">Job Title</div>
                  <div className="w-1/3 title">Date Modified</div>
                  <div className="w-1/3 title">Candidates</div>
                </div>

                <div className="w-1/5 flex gap-4 justify-end">
                  <span>Filter</span>
                  <img src={filter} alt="" />
                </div>
              </div>
              {userJobs.map((job) => (
                <JobList key={job.id} job={job} />
              ))}

              {data && (
                <Pagination totalPages={data.meta.total} setPage={setPage} />
              )}
            </>
          ) : (
            ""
          )}
        </div>
      </main>
    </div>
  );
};

export default User;
