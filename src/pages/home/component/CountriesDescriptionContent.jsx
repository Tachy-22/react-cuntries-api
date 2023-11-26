import { useSelector } from "react-redux";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const CountriesDescriptionContent = () => {
  const navigate = useNavigate();
  const { countryInView } = useSelector((state) => state.app);
  const handleBackNav = useCallback(() => {
    navigate(-1);
  }, [navigate]);

 // console.log("countryInView :", countryInView);
  const subHeadingStyles =
    "font-semibold capitalize flex gap-2 w-fit border md:text-base text-sm";
  const infoStyles = "text-gray-500 font-medium capitalize flex";

  return (
    <>
      <div
        onClick={handleBackNav}
        className=" w-fit lg:py-2 lg:px-6 py-1 px-4 border-gray-300 shadow-md border-2 rounded flex  justify-center gap-2 items-center cursor-pointer lg:hover:shadow-xl lg:hover:-translate-y-3 transition-all duration-700"
      >
        <FaArrowLeftLong className="text " /> Back
      </div>
      <section className="flex justify-between items-center xl:flex-row flex-col  gap-[5rem] xl:px-0 lg:px-[10rem] ">
        <img src={countryInView?.flag} alt="" className="xl:w-[50%] w-full" />
        <div className=" flex flex-col  border-black xl:w-[50%] w-full  ">
          <h2 className="xxl:text-2xl text-xl font-bold xl:pb-[4rem] pb-6">
            {countryInView?.name}
          </h2>
          <div className="grid grid-flow-row grid-cols-2 gap-3 cursor-pointer">
            <p className={subHeadingStyles}>
              Native name:
              <span className={infoStyles}> {countryInView?.nativeName} </span>
            </p>
            <p className={subHeadingStyles}>
              population
              <span className={infoStyles}> {countryInView?.population} </span>
            </p>
            <p className={subHeadingStyles}>
              Region:
              <span className={infoStyles}> {countryInView?.region} </span>
            </p>
            <p className={subHeadingStyles}>
              sub region:
              <span className={infoStyles}> {countryInView?.subregion} </span>
            </p>
            <p className={subHeadingStyles}>
              capital:
              <span className={infoStyles}> {countryInView?.capital} </span>
            </p>
            <p className={subHeadingStyles}>
              Top Level Domain:
              <span className={infoStyles}>
                {countryInView?.topLevelDomain[0]}{" "}
              </span>
            </p>
            <p className={subHeadingStyles}>
              currencies:
              <span className={infoStyles}>
                {" "}
                {countryInView?.currencies[0].code}{" "}
              </span>
            </p>
            <div className={subHeadingStyles}>
              languages:
              <span className={infoStyles}>
                {countryInView?.languages?.map((lang, index) => (
                  <p className="" key={index}>
                    {lang.name} ,
                  </p>
                ))}{" "}
              </span>
            </div>
          </div>
          <div className="pt-[3rem] font-semibold flex gap-3 lg:items-center lg:flex-row flex-col w-full  md:text-base  capitalize ">
            <span className="flex-grow w-fit  ">Border_Countries:</span>
            <div className="flex gap-2 font-medium w-full ">
              {countryInView?.borders?.map((neighbour, i) => (
                <div key={i} className=" border shadow rounded p-1 px-4">
                  {neighbour}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CountriesDescriptionContent;
