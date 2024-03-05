import React from "react";

const Location = () => {
  return (
    <div className="min-h-[50vh] box-2 flex flex-col  text-center space-y-4">
      <h2>Lokace</h2>
      <p>
        Pokud se Vám naše služby zamlouvají, lokace je to poslední co nás trápí.
        Dojeteme všude, kam vede cesta.
      </p>
      {/*mapa*/}
      <div className="flex flex-col lg:flex-row-reverse gap-8">
        <div className=" w-full min-h-[300px] sm:h-[400px] lg:w-1/2 xl:w-3/5 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29974.645851694444!2d14.240257301311457!3d49.823930344475144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9e51607e46b5%3A0x246e17c4c62c3282!2zTm92w6EgVmVzIHBvZCBQbGXFocOtLCAyNjIgMDQgTm92w6EgVmVzIHBvZCBQbGXFocOt!5e0!3m2!1scs!2scz!4v1709568960588!5m2!1scs!2scz"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl absolute h-full w-full"
          ></iframe>
        </div>
        {/*text*/}
        <div className="space-y-7 text-md my-auto">
          <p>
            Sídlo máme v Nové Vsi pod Pleší, pokud se u nás <br /> chcete
            zastavit osobně tak můžete v tyto časy
          </p>
          <ul>
            <li>
              Po - Čt: <span>8:00 - 16:30</span>
            </li>
            <li>
              Pá: <span>10:00 - 16:30</span>
            </li>
            <li>
              So: <span>10:00 - 13:00</span>
            </li>
          </ul>
          <p>
            Na místě jsme schopni s Vámi probrat varianty <br /> vylepšení
            vašeho domu, bytu nebo chalupy.
          </p>
          <p>
            Pokud se dohodneme, tak okamžitě také obdržíte <br /> předběžné
            vyčíslení a informace k tomu jak <br /> budeme postupovat dále
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
