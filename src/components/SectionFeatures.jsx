import React from "react";

const SectionFeatures = function (props) {
  const styleBox = {
    backgroundColor: props.active ? "#001AFF" : "#ffffff",
  };
  return (
    <div
      style={styleBox}
      className="p-6 rounded-lg bg-white drop-shadow-section basis-1/3"
    >
      <div>
        <img
          src={props.logoimg}
          alt="logofigma"
          className="outline-1 outline-gray-300 float-left mr-3"
        />
        <h3
          style={{ color: props.active ? "#ffffff" : "#000" }}
          className="font-semibold text-lg text-black"
        >
          {props.titlejob}
        </h3>
        <p
          style={{ color: props.active ? "rgba(255,255,255,.8)" : "#000" }}
          className="text-black/60"
        >
          {props.appjob}
        </p>
      </div>
      <p
        style={{ color: props.active ? "rgba(255,255,255,.8)" : "#000" }}
        className="py-5 text-black/60 leading-loose lg:h-[8rem]"
      >
        {props.descjob}
      </p>
      <div className="flex justify-between text-black font-semibold pt-5 border border-x-0 border-b-0 border-t-white/20">
        <div
          style={{
            color: props.active ? "#ffffff" : "#000",
            backgroundColor: props.active && "rgba(255,255,255,.15)",
          }}
          className="text-[.75rem] py-1 px-4 bg-black/[.07] rounded-xl"
        >
          {props.badgetool}
        </div>
        <p
          style={{ color: props.active ? "#ffffff" : "#000" }}
          className="text-[.875rem]"
        >
          {props.pricejob}
        </p>
      </div>
    </div>
  );
};

export default SectionFeatures;
