import Image from "next/image";
import React from "react";
const Catalog = ({ data }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image
        alt={data.name}
        className="w-full"
        width={100}
        height={50}
        src={data.image}
      />
      <div className="p-4 text-center">
        <h2 className="font-bold">{data.name}</h2>
      </div>
    </div>
  );
};
export default Catalog;