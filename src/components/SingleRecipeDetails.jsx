import React, { useState } from "react";

const SingleRecipeDetails = ({ data }) => {
  const [activeTab, setActiveTab] = useState("description");

  if (!data) return;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-y-10 md:gap-10">
      <div className="overflow-hidden">
        <img
          src={data.image}
          alt="image"
          className="w-[100%] h-[240px] md:w-[400px] object-cover rounded shadow-lg"
        />
      </div>

      <div className="col-span-2 flex flex-col items-center gap-5">
        <div className="flex justify-center gap-5">
          <button
            onClick={() => setActiveTab("description")}
            className="custom-btn btn-11"
          >
            description
          </button>
          <button
            onClick={() => setActiveTab("ingredients")}
            className="custom-btn btn-11"
          >
            ingredients
          </button>
        </div>

        <div className="w-[75%] min-h-[30vh]">
          {activeTab === "description" ? data.description : data.ingredients}
        </div>
      </div>
    </div>
  );
};

export default SingleRecipeDetails;
