import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function DetailsPage({ index }) {
  const { fact } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const onBack = () => {
    navigate("/");
  };
  useEffect(() => {
    axios
      .get("https://catfact.ninja/facts?limit=20")
      .then((res) => {
        const decodedFact = decodeURIComponent(fact);
        const found = res.data.data.find((i) => i.fact === decodedFact);
        setItem(found);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cat facts:", error);
        setLoading(false);
      });
  }, [fact]);

  if (loading)
    return <span className="loading loading-spinner text-success"></span>;
  if (!item) return <p>Fact not found.</p>;

  return (
    <div className="p-6 max-w-lg mx-auto text-center">
      <img
        src={`https://loremflickr.com/300/200/kitten?random=${index}`}
        alt="Kitten"
        className="w-full h-full rounded-3xl object-cover p-4 m-5"
      />
      <h1 className="text-2xl font-bold mb-4 ">Cat Fact Details</h1>
      <p className="text-gray-700 mt-2">{item.fact}</p>
      <p className="text-gray-700 mt-2">Length: {item.length}</p>
      <button onClick={onBack} className="btn btn-dash mt-5 hover:bg-blue-300">
        Go Back
      </button>
    </div>
  );
}

export default DetailsPage;
