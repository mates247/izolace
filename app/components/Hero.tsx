import React from "react";

import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";
import Button from "@/app/components/Button";
import Offer from "@/app/components/Navigation/Offer";
import Navbar from "@/app/components/Navigation/Navbar";

const Hero = () => {
  let offer = true;

  return (
    <div
      id="box"
      className="main-box h-screen bg-blue-400 bg-[url(/images/herocrop.jpg)] bg-no-repeat bg-cover bg-center"
    >
      <div className={`${offer ? "block" : "hidden"}`}>
        <Offer />
      </div>

      {/*padding box*/}
      <div
        className={`box h-full flex flex-col ${offer ? "h-[calc(100%-40px)]" : "h-full"} `}
      >
        <Navbar offer={offer} />
        {/*everything under nav*/}
        <div className=" w-full flex-1 flex flex-col  ">
          {/*content*/}
          <div
            className={`flex flex-col md:flex-row md:gap-6 items-center lg:items-start justify-center lg:justify-around ${offer ? "h-[calc(100%-40px)]" : "h-full"}`}
          >
            {/*textbox-1-small*/}
            <div className="w-full md:w-1/2 max-w-[500px] border-2 min-h-[30vh] lg:mt-[15vh] flex flex-col justify-center items-center md:max-w-[600px] text-center space-y-4 bg-white/30 rounded-xl p-2">
              <div>
                <h2 className="text-2xl">
                  O klienty se staráme již <span>20 let</span>
                </h2>
                <p>
                  Pokud máte problémy ze zateplením, velkou vlhkostí, nebo
                  velkou spotřebou energie na vytápění
                </p>
                <p>Tak jsme tu přímo pro Vás!</p>
              </div>
              {/*buttons*/}
              <div className="flex justify-center gap-4 w-full ">
                <Button main title="Objednat" />
                <Button secondary title="Více informací" />
              </div>
            </div>
            {/*textbox-2-big*/}
            <div className="hidden md:flex w-1/2 max-w-[600px] h-fit flex-col lg:mt-[10vh] bg-white/35 border-2  rounded-xl space-y-2 lg:space-y-4 p-2 text-center tall:hidden">
              <h2>S námi nešlápnete vedle</h2>
              <h3>realizace od A do Z</h3>
              <div className="flex flex-col gap-4">
                <p className="text-lg font-medium">
                  Aktuální majitel firmy Tomáš novák se věnuje práci v oboru
                  desátým rokem. Firmu převzal po svém otci, který se od malička
                  v oblstai stavebnictví pohyboval. V Roce 2004 se rozhodl
                  založit vlastní firmu<span> IZOLACE s.r.o. </span> Firma za tu
                  dobu pomohla více než 400 klientům. Hlavní Oblasti, na které
                  se zaměřujeme jsou:
                </p>
                <ul className="text-start pl-10 text-lg list-disc">
                  <li>Izolace základů domu</li>
                  <li>Zateplení střech a fasád</li>
                  <li>Výměny oken</li>
                  <li>Instalace chytých senzorů</li>
                </ul>
                <p className="text-lg font-medium">
                  To, ale neznamená, že nedokážeme daleko více, spolupracujeme s
                  řadou špičkových firem, které v případě potřeby oslovujeme a
                  společně, jsme schopni pomoct i při kompletní rekonstrukci
                </p>
              </div>
              <div className="flex justify-center gap-4 w-full ">
                <Button main title="Naše práce" />
                <Button secondary title="Kontakt" />
              </div>
            </div>
          </div>

          {/*arrow*/}
          <div className="animate-bounce text-white  w-fit h-fit mx-auto self-end ">
            <Link href="#showcase">
              <FaArrowDown size={40} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
