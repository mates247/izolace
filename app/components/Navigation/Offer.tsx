"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Countdown from "react-countdown";

const Offer = () => {
  const endDate = "2024-3-25";

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, [loading]);

  return (
    <div className="flex justify-center bg-blue-400/80 h-[40px] items-center space-x-3 text-white">
      <h2>AKCE</h2>
      <Link className="underline" href="">
        konzultace zdarma{" "}
      </Link>
      {loading && <Countdown className="text-rose-50" date={endDate} />}
    </div>
  );
};

export default Offer;
