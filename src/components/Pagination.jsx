import React from "react";

import * as apiRequest from "../ApiRequests";

const Pagination = ({ totalPages, setPage }) => {
  const pageList = [];

  for (let i = 1; i <= totalPages; i++) {
    pageList.push(i);
  }
  return (
    <ul className="my-4 flex gap-2">
      {pageList.map((page) => (
        <li
        key={page}
          onClick={() => {
            setPage(page);
          }}
          className=" w-9 h-9 text-center text-sm leading-8 border border-jb-blue text-jb-blue rounded-sm cursor-pointer"
        >
          {page}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
