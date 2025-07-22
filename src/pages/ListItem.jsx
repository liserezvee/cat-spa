import React, { useEffect, useState } from "react";
import axios from "axios";
import ListFact from "../components/ListFact";

const ListItem = () => {
  const [facts, setFacts] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    axios
      .get("https://catfact.ninja/facts?limit=30")
      .then((res) => {
        console.log(res.data.data);
        setFacts(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cat facts:", error);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <span className="loading loading-spinner text-info"></span>;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFacts = facts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(facts.length / itemsPerPage);

  return (
    <div className="text-center">
      <div>
        <h2 className="text-3xl font-medium py-16">
          Random Cat Fact: {facts.length}
        </h2>
        <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 gap-y-6 px-3 sm:px-0">
          {currentFacts?.map((item, index) => (
            <ListFact item={item} key={index} index={index} />
          ))}
        </div>
      </div>
      <div>
        {/* {pagination here} */}
        <div className="flex justify-center gap-2 m-5">
          <button
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded cursor-pointer ${
                currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
