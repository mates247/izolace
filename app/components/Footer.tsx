import React from "react";
import { icons } from "@/app/data/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="main-box bg-blue-400  ">
      <div className="box h-full  w-full flex flex-col justify-between items-center py-5 gap-6">
        <div className="">
          {icons.map((item) => (
            <Link href={item.url} key={item.title}>
              <div className="flex gap-8 items-center space-y-2 hover:scale-105 transition duration-200 hover:text-[#424242]">
                {item.Icon}
                <p>{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center ">
          <p>
            Telefon:
            <span> 785 584 555</span>
          </p>
          <p>
            Email: <span>izolace@info.cz</span>
          </p>
          <p>
            IČO: <span>8555555</span>
          </p>
        </div>
        <div className="">
          @Matěj Bittner 2024 -{" "}
          <Link className="font-medium underline text-lg" href="/">
            Izolace.cz
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
