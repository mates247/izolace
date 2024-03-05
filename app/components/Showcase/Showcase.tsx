"use client";
import React, { useEffect, useState } from "react";

import { Oval } from "react-loader-spinner";
import { CiCirclePlus } from "react-icons/ci";
import Loader from "@/app/components/Showcase/Loader";

const Showcase = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div id="showcase" className="min-h-[50vh] box-2 text-center relative">
      <h1 className="pt-2 mb-2">Řemeslo, náš život!</h1>
      {/*images*/}
      {!loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center gap-2 ">
          <div className="bg-[url(/images/1resize.jpg)] showcase-image">
            <Loader />
          </div>
          <div className="bg-[url(/images/2resize.jpg)] showcase-image">
            <Loader />
          </div>
          <div className="bg-[url(/images/3resize.jpg)] showcase-image">
            <Loader />
          </div>
          <div className="bg-[url(/images/4resize.jpg)] showcase-image">
            <Loader />
          </div>
          <div className="w-[300px] sm:w-[250px] md:w-[300px] lg:w-[390px] aspect-square  rounded-xl bg-blue-400/70 flex flex-col gap-8 justify-center text-center items-center  bg-[radial-gradient(#fff_5%,_transparent_0)] [background-size:35px_35px] cursor-pointer hover:scale-[1.01] focus:scale-[1.01] transition">
            <h1>Chci vidět více!</h1>
            <CiCirclePlus
              className="hover:scale-105 duration-200 hover:text-[#424242]"
              size={90}
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center gap-2 ">
          <div className="bg-[url(/images/1.jpg)] showcase-image"></div>
          <div className="bg-[url(/images/2.jpg)] showcase-image"></div>
          <div className="hidden sm:block bg-[url(/images/3.jpg)] showcase-image"></div>
          <div className="hidden xl:block bg-[url(/images/4.jpg)] showcase-image"></div>
          <div className="w-[300px] sm:w-[250px] md:w-[300px] lg:w-[390px] aspect-square  rounded-xl bg-blue-400/70 flex flex-col gap-8 justify-center text-center items-center  bg-[radial-gradient(#fff_5%,_transparent_0)] [background-size:35px_35px] cursor-pointer hover:scale-[1.01] focus:scale-[1.01] transition">
            <h1>Chci vidět více!</h1>
            <CiCirclePlus
              className="hover:scale-105 duration-200 hover:text-[#424242]"
              size={90}
            />
          </div>
        </div>
      )}

      <hr className="w-[90%] ml-[5%] mt-8 border-1 rounded-xl" />
    </div>
  );
};

export default Showcase;

//
//
// "use client";
// import React, { useEffect, useState } from "react";
//
// import { CiCirclePlus } from "react-icons/ci";
//
// const Showcase = () => {
//     const [loading, setLoading] = useState(false);
//
//     useEffect(() => {
//         setLoading(true);
//     }, [loading]);
//
//     return (
//         <div id="showcase" className="min-h-[50vh] box-2 text-center relative">
//             {!loading ? (
//                 <div className="absolute bg-rose-500 w-full h-full"></div>
//             ) : (
//
//             )}
//
//             <h1 className="pt-2 mb-2">Řemeslo, náš život!</h1>
//             {/*images*/}
//             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center gap-2 ">
//                 <div className="bg-[url(/images/1.jpg)] w-[300px] sm:w-[250px] md:w-[300px] lg:w-[390px] aspect-square bg-center bg-cover rounded-xl bg-no-repeat"></div>
//                 <div className="bg-[url(/images/2.jpg)] w-[300px] sm:w-[250px] md:w-[300px] lg:w-[390px] aspect-square bg-center bg-cover rounded-xl bg-no-repeat"></div>
//                 <div className="hidden sm:block bg-[url(/images/3.jpg)] w-[300px] sm:w-[250px] md:w-[300px] lg:w-[390px] aspect-square bg-center bg-cover rounded-xl bg-no-repeat"></div>
//                 <div className="hidden xl:block bg-[url(/images/4.jpg)] w-[300px] sm:w-[250px] md:w-[300px] lg:w-[390px] aspect-square bg-center bg-cover rounded-xl bg-no-repeat"></div>
//                 <div className="w-[300px] sm:w-[250px] md:w-[300px] lg:w-[390px] aspect-square  rounded-xl bg-blue-400/70 flex flex-col gap-8 justify-center text-center items-center  bg-[radial-gradient(#fff_5%,_transparent_0)] [background-size:35px_35px] cursor-pointer hover:scale-[1.01] focus:scale-[1.01] transition">
//                     <h1>Chci vidět více!</h1>
//                     <CiCirclePlus
//                         className="hover:scale-105 duration-200 hover:text-[#424242]"
//                         size={90}
//                     />
//                 </div>
//             </div>
//             <hr className="w-[90%] ml-[5%] mt-8 border-1 rounded-xl" />
//         </div>
//     );
// };
//
// export default Showcase;
