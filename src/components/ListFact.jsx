import React from "react";
import { useNavigate } from "react-router-dom";

const ListFact = ({ item, index }) => {
  const navigate = useNavigate();
  const onDetails = (fact) => {
    navigate(`/details/${encodeURIComponent(fact)}`);
  };

  const imageUrl = `https://loremflickr.com/300/200/kitten?random=${index}`;
  return (
    <div className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
      <div>
        <img src={imageUrl} alt="Cat" className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex-1 text-left">
          <p className="font-medium text-sm truncate">{item.fact}</p>

          <p className="text-xs text-gray-500 mt-1">Length: {item.length}</p>
        </div>
        <p
          onClick={() => onDetails(item.fact)}
          className="btn btn-sm rounded-3xl hover:bg-amber-50 hover:text-amber-950"
        >
          See details
        </p>
      </div>
    </div>
  );
};

export default ListFact;
