"use client";
import { useState, useEffect } from "react";
import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType[];
}

const BillboardCarousel = ({ data }: BillboardProps) => {
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(Math.random() * data.length)
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden -z-10 mt-16">
      <div
        style={{
          backgroundImage: `url(${data[currentIndex].imageUrl})`,
          backgroundPosition: "center center",
        }}
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
      ></div>
    </div>
  );
};

export default BillboardCarousel;
