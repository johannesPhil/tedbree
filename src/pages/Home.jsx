import React, { useState, useEffect } from "react";

import { useQuery, usePaginatedQuery } from "react-query";
import * as apiReq from "../ApiRequests";

import Header from "../components/Header";
import Search from "../components/Search";
import JobCard from "../components/JobCard";

import "../App.css";
import JobDetails from "../components/JobDetails";
import Pagination from "../components/Pagination";

const Home = () => {
  const isGuestHome = true;
    const [jobs, setJobs] = useState();
  const [page, setPage] = useState(1);
  const [jobId, setJobId] = useState();

  const { status, data, isLoading } = useQuery(
    ["jobs", page],
    () => apiReq.getJobs(page),
    { keepPreviousData: true }
  );


  useEffect(() => {
    if (status === "success") {
      setJobs(data.data);
    }
  }, [status, data, jobs, page]);

  return (
    <>
      <Header guest={isGuestHome} />

      <main className=" mt-12 px-10 lg:px-24 py-20 flex justify-between">
        <div
          className={`cardWrapper ${
            jobId ? " w-4/12" : "w-full"
          } flex justify-between flex-wrap gap-7`}
        >
          <div className="w-full flex flex-wrap justify-between">
            {jobs
              ? jobs.map((job) => (
                  <JobCard job={job} key={job.id} jobId={jobId} setJobId={setJobId} />
                ))
              : ""}
          </div>
          <div>
            {data && (
              <Pagination totalPages={data.meta.total} setPage={setPage} />
            )}
          </div>
        </div>
        {jobId && (
          <div className="w-7/12">
            <JobDetails jobId={jobId} />
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
