import React from "react";

const Footer = () => {
  return (
    <div
      id="Contacts"
      className=" flex justify-center bg-black text-white text-bold font-serif h-[15rem] w-full absolute "
    >
      <div className="w-full sm:flex justify-evenly items-center text-md sm:text-lg">
        <div className="sm:m-2 m-6 p-2 sm:flex justify-center ">
          <p>
            Contacts : 7251958143 , 6396449828 <br />
            Email :
            <span className="  tracking-wide">
              &nbsp; bishtenterprises2022@gmail.com
            </span>
          </p>
          {/* <p>Contacts : </p> 7251958143 , <span> 9012345287</span> */}
        </div>
        <p className=" m-2 pl-6  flex justify-center sm:block">
          Address : Vill- Chamali , Post- Satpali , Patty-Ringwar Syun
          <br /> Distt - Pauri Garhwal - Uttarakhand ( 246167 ) - India
        </p>
      </div>
    </div>
  );
};

export default Footer;
